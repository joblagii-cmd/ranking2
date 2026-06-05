import {
  TOP_COUNTRIES,
  JOB_TITLES,
  SENIORITY_LEVELS,
  EMPLOYMENT_TYPES,
  SALARY_RANGES,
  SKILLS_BY_DOMAIN,
  JOB_DESCRIPTIONS_TEMPLATES,
} from "./countries";

export interface JobPost {
  id: string;
  slug: string;
  title: string;
  company: string;
  countryCode: string;
  country: string;
  city: string;
  isRemote: boolean;
  employmentType: string;
  seniority: string;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  description: string;
  skills: string[];
  publishedAt: string;
  validThrough: string;
  schema: JobPostingSchema;
}

export interface JobPostingSchema {
  "@context": string;
  "@type": string;
  title: string;
  description: string;
  identifier: { "@type": string; name: string; value: string };
  datePosted: string;
  validThrough: string;
  employmentType: string;
  hiringOrganization: { "@type": string; name: string; sameAs: string };
  jobLocation: object;
  applicantLocationRequirements?: object;
  jobLocationType?: string;
  baseSalary: object;
}

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getDomain(title: string): string {
  const lower = title.toLowerCase();
  if (lower.match(/engineer|developer|architect|devops|cloud|security|network|system|database|mobile|ios|android/))
    return "tech";
  if (lower.match(/design|ux|ui|graphic/)) return "design";
  if (lower.match(/data|analyst|scientist|bi|machine learning/)) return "data";
  if (lower.match(/marketing|seo|content|social|pr|brand/)) return "marketing";
  if (lower.match(/finance|account|financial|risk|audit/)) return "finance";
  return "general";
}

function pickSkills(domain: string, count = 5): string[] {
  const pool = [...(SKILLS_BY_DOMAIN[domain] || SKILLS_BY_DOMAIN.general), ...SKILLS_BY_DOMAIN.general];
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return [...new Set(shuffled)].slice(0, count);
}

function formatSalary(min: number, max: number, currency: string): string {
  const fmt = (n: number) =>
    currency === "INR"
      ? `₹${(n / 100000).toFixed(1)}L`
      : new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(n);
  return `${fmt(min)} – ${fmt(max)}`;
}

function buildDescription(
  template: string,
  title: string,
  company: string,
  domain: string,
  skills: string[],
  salary: string,
  experience: number,
  isRemote: boolean
): string {
  const remotePerk = isRemote
    ? "100% remote work — work from anywhere in the world"
    : "Hybrid work options available";

  return template
    .replace(/{title}/g, title)
    .replace(/{company}/g, company)
    .replace(/{domain}/g, domain)
    .replace(/{skills}/g, skills.slice(0, 4).join(", "))
    .replace(/{salary}/g, salary)
    .replace(/{experience}/g, String(experience))
    .replace(/{remote_perk}/g, remotePerk);
}

export function generateJobs(
  countryCode: string,
  companies: string[],
  totalJobs = 5000
): JobPost[] {
  const country = TOP_COUNTRIES.find((c) => c.code === countryCode);
  if (!country || companies.length === 0) return [];

  const jobs: JobPost[] = [];
  const remoteCount = totalJobs / 2; // 2500
  const publishedAt = new Date();
  const validThrough = new Date(publishedAt);
  validThrough.setFullYear(validThrough.getFullYear() + 1);

  const publishedAtISO = publishedAt.toISOString();
  const validThroughISO = validThrough.toISOString();

  for (let i = 0; i < totalJobs; i++) {
    const isRemote = i < remoteCount;
    const baseTitle = rand(JOB_TITLES);
    const seniority = rand(SENIORITY_LEVELS);
    const title = `${seniority} ${baseTitle}`;
    const company = rand(companies);
    const city = rand(country.cities);
    const domain = getDomain(baseTitle);
    const skills = pickSkills(domain);
    const employmentType = rand(EMPLOYMENT_TYPES);
    const salaryRange = rand(SALARY_RANGES[countryCode] || SALARY_RANGES["US"]);
    const salaryMin = salaryRange[0];
    const salaryMax = salaryRange[1];
    const salary = formatSalary(salaryMin, salaryMax, country.currency);
    const experience = randInt(1, 10);
    const template = rand(JOB_DESCRIPTIONS_TEMPLATES);
    const description = buildDescription(template, title, company, domain, skills, salary, experience, isRemote);

    const id = `${countryCode.toLowerCase()}-${i + 1}-${Date.now()}`;
    const slug = `${slugify(title)}-${slugify(company)}-${i + 1}`;

    const jobLocation = isRemote
      ? {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressCountry: countryCode },
        }
      : {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: city,
            addressCountry: countryCode,
          },
        };

    const schema: JobPostingSchema = {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title,
      description,
      identifier: {
        "@type": "PropertyValue",
        name: company,
        value: id,
      },
      datePosted: publishedAtISO,
      validThrough: validThroughISO,
      employmentType,
      hiringOrganization: {
        "@type": "Organization",
        name: company,
        sameAs: `https://www.${slugify(company)}.com`,
      },
      jobLocation,
      ...(isRemote && {
        applicantLocationRequirements: {
          "@type": "Country",
          name: country.name,
        },
        jobLocationType: "TELECOMMUTE",
      }),
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: country.currency,
        value: {
          "@type": "QuantitativeValue",
          minValue: salaryMin,
          maxValue: salaryMax,
          unitText: "YEAR",
        },
      },
    };

    jobs.push({
      id,
      slug,
      title,
      company,
      countryCode,
      country: country.name,
      city: isRemote ? "Remote" : city,
      isRemote,
      employmentType,
      seniority,
      salaryMin,
      salaryMax,
      currency: country.currency,
      description,
      skills,
      publishedAt: publishedAtISO,
      validThrough: validThroughISO,
      schema,
    });
  }

  return jobs;
}
