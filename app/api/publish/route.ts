import { NextRequest, NextResponse } from "next/server";
import { TOP_COUNTRIES, JOB_TITLES, SENIORITY_LEVELS, EMPLOYMENT_TYPES, SALARY_RANGES, SKILLS_BY_DOMAIN, JOB_DESCRIPTIONS_TEMPLATES } from "@/lib/countries";

export const maxDuration = 60;

function randInt(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function slugify(s: string) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function getDomain(title: string) {
  const l = title.toLowerCase();
  if (l.match(/engineer|developer|architect|devops|cloud|security|network|system|database|mobile|ios|android/)) return "tech";
  if (l.match(/design|ux|ui|graphic/)) return "design";
  if (l.match(/data|analyst|scientist|bi|machine/)) return "data";
  if (l.match(/marketing|seo|content|social|pr|brand/)) return "marketing";
  if (l.match(/finance|account|financial|risk|audit/)) return "finance";
  return "general";
}
function pickSkills(domain: string, count = 5): string[] {
  const pool = [...(SKILLS_BY_DOMAIN[domain] || []), ...SKILLS_BY_DOMAIN.general];
  return [...new Set(pool.sort(() => 0.5 - Math.random()))].slice(0, count);
}
function fmtSalary(min: number, max: number, currency: string) {
  if (currency === "INR") return `₹${(min / 100000).toFixed(1)}L – ₹${(max / 100000).toFixed(1)}L`;
  const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(n);
  return `${fmt(min)} – ${fmt(max)}`;
}

async function saveFileToGitHub(path: string, content: string, token: string, owner: string, repo: string) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const b64 = Buffer.from(content).toString("base64");
  let sha: string | undefined;
  try {
    const check = await fetch(apiUrl, { headers: { Authorization: `Bearer ${token}`, "User-Agent": "JobPortal" } });
    if (check.ok) { const d = await check.json(); sha = d.sha; }
  } catch {}
  const res = await fetch(apiUrl, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", "User-Agent": "JobPortal" },
    body: JSON.stringify({ message: `Publish jobs: ${path}`, content: b64, ...(sha && { sha }) }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(`GitHub save failed: ${JSON.stringify(err)}`);
  }
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const { countryCode, companies } = await req.json();
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;

    if (!token || !owner || !repo) {
      return NextResponse.json({ error: "Missing env vars: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO" }, { status: 500 });
    }
    if (!countryCode || !companies?.length) {
      return NextResponse.json({ error: "Missing countryCode or companies" }, { status: 400 });
    }

    const country = TOP_COUNTRIES.find(c => c.code === countryCode);
    if (!country) return NextResponse.json({ error: "Invalid country" }, { status: 400 });

    const TOTAL = 5000;
    const publishedAt = new Date();
    const validThrough = new Date(publishedAt);
    validThrough.setFullYear(validThrough.getFullYear() + 1);
    const currency = country.currency;
    const jobs: Record<string, unknown>[] = [];

    for (let i = 0; i < TOTAL; i++) {
      const isRemote = i < TOTAL / 2;
      const baseTitle = JOB_TITLES[Math.floor(Math.random() * JOB_TITLES.length)];
      const seniority = SENIORITY_LEVELS[Math.floor(Math.random() * SENIORITY_LEVELS.length)];
      const title = `${seniority} ${baseTitle}`;
      const company: string = companies[Math.floor(Math.random() * companies.length)];
      const city = isRemote ? "Remote" : country.cities[Math.floor(Math.random() * country.cities.length)];
      const domain = getDomain(baseTitle);
      const skills = pickSkills(domain);
      const empType = EMPLOYMENT_TYPES[Math.floor(Math.random() * EMPLOYMENT_TYPES.length)];
      const salaryRanges = SALARY_RANGES[countryCode] || SALARY_RANGES["US"];
      const [sMin, sMax] = salaryRanges[Math.floor(Math.random() * salaryRanges.length)];
      const salary = fmtSalary(sMin, sMax, currency);
      const exp = randInt(1, 10);
      const templates: string[] = JOB_DESCRIPTIONS_TEMPLATES;
      const tmpl = templates[Math.floor(Math.random() * templates.length)];
      const remotePerk = isRemote ? "100% remote — work from anywhere" : "Hybrid work options available";
      const description = tmpl
        .split("{title}").join(title).split("{company}").join(company)
        .split("{domain}").join(domain).split("{skills}").join(skills.slice(0, 4).join(", "))
        .split("{salary}").join(salary).split("{experience}").join(String(exp))
        .split("{remote_perk}").join(remotePerk);

      const id = `${countryCode.toLowerCase()}-${i + 1}-${Date.now()}`;
      const slug = `${slugify(title)}-${slugify(company)}-${i + 1}`;

      const schema = {
        "@context": "https://schema.org", "@type": "JobPosting",
        title, description,
        identifier: { "@type": "PropertyValue", name: company, value: id },
        datePosted: publishedAt.toISOString(),
        validThrough: validThrough.toISOString(),
        employmentType: empType,
        hiringOrganization: { "@type": "Organization", name: company, sameAs: `https://www.${slugify(company)}.com` },
        jobLocation: isRemote
          ? { "@type": "Place", address: { "@type": "PostalAddress", addressCountry: countryCode } }
          : { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: city, addressCountry: countryCode } },
        ...(isRemote && { applicantLocationRequirements: { "@type": "Country", name: country.name }, jobLocationType: "TELECOMMUTE" }),
        baseSalary: { "@type": "MonetaryAmount", currency, value: { "@type": "QuantitativeValue", minValue: sMin, maxValue: sMax, unitText: "YEAR" } },
      };

      jobs.push({ id, slug, title, company, countryCode, country: country.name, city, isRemote, employmentType: empType, seniority, salaryMin: sMin, salaryMax: sMax, currency, description, skills, publishedAt: publishedAt.toISOString(), validThrough: validThrough.toISOString(), schema });
    }

    // Save ALL 5000 jobs in ONE file per batch (split into 500-job chunks to stay under GitHub 1MB limit)
    const CHUNK_SIZE = 500;
    const timestamp = Date.now();

    for (let c = 0; c < jobs.length; c += CHUNK_SIZE) {
      const chunk = jobs.slice(c, c + CHUNK_SIZE);
      const chunkNum = Math.floor(c / CHUNK_SIZE);
      await saveFileToGitHub(
        `data/jobs-${countryCode}-${timestamp}-${chunkNum}.json`,
        JSON.stringify(chunk, null, 0),
        token, owner, repo
      );
    }

    // Save/update index file — append new job metadata (no description to keep small)
    let existingJobs: object[] = [];
    try {
      const idxRes = await fetch(
        `https://raw.githubusercontent.com/${owner}/${repo}/main/data/index-${countryCode}.json?t=${Date.now()}`,
        { cache: "no-store" }
      );
      if (idxRes.ok) existingJobs = await idxRes.json();
    } catch {}

    const newMeta = jobs.map(j => ({
      id: j.id, slug: j.slug, title: j.title, company: j.company,
      city: j.city, country: j.country, countryCode: j.countryCode,
      isRemote: j.isRemote, employmentType: j.employmentType,
      salaryMin: j.salaryMin, salaryMax: j.salaryMax, currency: j.currency,
      skills: j.skills, publishedAt: j.publishedAt,
      // store which chunk file this job is in
      chunkFile: `jobs-${countryCode}-${timestamp}-${Math.floor(jobs.indexOf(j) / CHUNK_SIZE)}.json`
    }));

    const allMeta = [...existingJobs, ...newMeta];
    await saveFileToGitHub(
      `data/index-${countryCode}.json`,
      JSON.stringify(allMeta, null, 0),
      token, owner, repo
    );

    // ── Sitemap generation ──────────────────────────────────────────
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ranking2-two.vercel.app";

    // Get existing sitemap registry
    let sitemapRegistry: { file: string; publishedAt: string; count: number }[] = [];
    try {
      const regRes = await fetch(
        `https://raw.githubusercontent.com/${owner}/${repo}/main/data/sitemap-registry.json?t=${Date.now()}`,
        { cache: "no-store" }
      );
      if (regRes.ok) sitemapRegistry = await regRes.json();
    } catch {}

    // New sitemap number = next in sequence
    const sitemapNum = sitemapRegistry.length + 1;
    const sitemapFile = `sitemap${sitemapNum}.xml`;

    // Build sitemap XML for this batch of 5000 jobs
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${jobs.map(j => `  <url>
    <loc>${siteUrl}/jobs/${j.slug}</loc>
    <lastmod>${publishedAt.toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join("\n")}
</urlset>`;

    await saveFileToGitHub(`public/${sitemapFile}`, sitemapXml, token, owner, repo);

    // Update registry
    sitemapRegistry.push({ file: sitemapFile, publishedAt: publishedAt.toISOString(), count: jobs.length });
    await saveFileToGitHub(
      `data/sitemap-registry.json`,
      JSON.stringify(sitemapRegistry, null, 2),
      token, owner, repo
    );

    // Rebuild sitemap index (sitemap.xml) listing all sitemaps
    const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRegistry.map(s => `  <sitemap>
    <loc>${siteUrl}/${s.file}</loc>
    <lastmod>${new Date(s.publishedAt).toISOString().split("T")[0]}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>`;

    await saveFileToGitHub(`public/sitemap.xml`, sitemapIndexXml, token, owner, repo);
    // ────────────────────────────────────────────────────────────────

    return NextResponse.json({
      success: true,
      total: jobs.length,
      remote: jobs.filter(j => j.isRemote).length,
      normal: jobs.filter(j => !j.isRemote).length,
      country: country.name,
      sitemap: sitemapFile,
    });
  } catch (err) {
    console.error("Publish error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
