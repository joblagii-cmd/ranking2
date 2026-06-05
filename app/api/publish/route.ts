import { NextRequest, NextResponse } from "next/server";
import { TOP_COUNTRIES, JOB_TITLES, SENIORITY_LEVELS, EMPLOYMENT_TYPES, SALARY_RANGES, SKILLS_BY_DOMAIN, JOB_DESCRIPTIONS_TEMPLATES } from "@/lib/countries";

export const maxDuration = 60;

function rand<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)] as T; }
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

  // Check if file exists to get SHA for update
  let sha: string | undefined;
  try {
    const check = await fetch(apiUrl, { headers: { Authorization: `Bearer ${token}`, "User-Agent": "JobPortal" } });
    if (check.ok) { const d = await check.json(); sha = d.sha; }
  } catch {}

  const res = await fetch(apiUrl, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", "User-Agent": "JobPortal" },
    body: JSON.stringify({ message: `Add job: ${path}`, content: b64, ...(sha && { sha }) }),
  });
  return res.ok;
}

export async function POST(req: NextRequest) {
  try {
    const { countryCode, companies } = await req.json();
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;

    if (!token || !owner || !repo) return NextResponse.json({ error: "GitHub env vars not set. Add GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO in Vercel." }, { status: 500 });
    if (!countryCode || !companies?.length) return NextResponse.json({ error: "Missing countryCode or companies" }, { status: 400 });

    const country = TOP_COUNTRIES.find(c => c.code === countryCode);
    if (!country) return NextResponse.json({ error: "Invalid country" }, { status: 400 });

    const TOTAL = 5000;
    const publishedAt = new Date();
    const validThrough = new Date(publishedAt); validThrough.setFullYear(validThrough.getFullYear() + 1);
    const currency = country.currency;

    // Generate ALL jobs first
    const jobs = [];
    for (let i = 0; i < TOTAL; i++) {
      const isRemote = i < TOTAL / 2;
      const baseTitle = rand(JOB_TITLES);
      const seniority = rand(SENIORITY_LEVELS);
      const title = `${seniority} ${baseTitle}`;
      const company: string = companies[Math.floor(Math.random() * companies.length)];
      const city = isRemote ? "Remote" : rand(country.cities);
      const domain = getDomain(baseTitle);
      const skills = pickSkills(domain);
      const empType = rand(EMPLOYMENT_TYPES);
      const [sMin, sMax] = rand(SALARY_RANGES[countryCode] || SALARY_RANGES["US"]);
      const salary = fmtSalary(sMin, sMax, currency);
      const exp = randInt(1, 10);
      const templates: string[] = JOB_DESCRIPTIONS_TEMPLATES;
      const templateStr: string = templates[Math.floor(Math.random() * templates.length)];
      const remotePerk = isRemote ? "100% remote — work from anywhere" : "Hybrid work options available";
      const description = templateStr
        .split("{title}").join(title)
        .split("{company}").join(company)
        .split("{domain}").join(domain)
        .split("{skills}").join(skills.slice(0, 4).join(", "))
        .split("{salary}").join(salary)
        .split("{experience}").join(String(exp))
        .split("{remote_perk}").join(remotePerk);

      const id = `${countryCode.toLowerCase()}-${i + 1}-${Date.now()}`;
      const slug = `${slugify(title)}-${slugify(company)}-${i + 1}`;

      const schema = {
        "@context": "https://schema.org", "@type": "JobPosting",
        title, description,
        identifier: { "@type": "PropertyValue", name: company, value: id },
        datePosted: publishedAt.toISOString(), validThrough: validThrough.toISOString(),
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

    // Save to GitHub in batches of 10 parallel
    const BATCH = 10;
    let saved = 0;
    for (let i = 0; i < jobs.length; i += BATCH) {
      const batch = jobs.slice(i, i + BATCH);
      await Promise.all(batch.map(job =>
        saveFileToGitHub(`data/jobs/${job.slug}.json`, JSON.stringify(job, null, 2), token, owner, repo)
      ));
      saved += batch.length;
    }

    // Save index file per country (slug list for listing page)
    const existingIndex = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/data/index-${countryCode}.json`, { headers: { Authorization: `Bearer ${token}`, "User-Agent": "JobPortal" } });
    let existingSlugs: string[] = [];
    if (existingIndex.ok) {
      const d = await existingIndex.json();
      existingSlugs = JSON.parse(Buffer.from(d.content, "base64").toString());
    }
    const newSlugs = [...existingSlugs, ...jobs.map(j => ({ slug: j.slug, title: j.title, company: j.company, city: j.city, country: j.country, countryCode: j.countryCode, isRemote: j.isRemote, employmentType: j.employmentType, salaryMin: j.salaryMin, salaryMax: j.salaryMax, currency: j.currency, skills: j.skills, publishedAt: j.publishedAt }))];
    await saveFileToGitHub(`data/index-${countryCode}.json`, JSON.stringify(newSlugs, null, 2), token, owner, repo);

    return NextResponse.json({ success: true, total: saved, remote: jobs.filter(j => j.isRemote).length, normal: jobs.filter(j => !j.isRemote).length, country: country.name });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to publish jobs" }, { status: 500 });
  }
}
