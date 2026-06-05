import { notFound } from "next/navigation";
import { Metadata } from "next";

interface JobSchema {
  "@context": string;
  "@type": string;
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  employmentType: string;
  hiringOrganization: { "@type": string; name: string; sameAs: string };
  jobLocation: object;
  applicantLocationRequirements?: object;
  jobLocationType?: string;
  baseSalary: {
    "@type": string;
    currency: string;
    value: { "@type": string; minValue: number; maxValue: number; unitText: string };
  };
}

interface Job {
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
  schema: JobSchema;
}

const GITHUB_RAW = "https://raw.githubusercontent.com";

async function getJob(slug: string): Promise<Job | null> {
  try {
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    if (!owner || !repo) return null;
    const res = await fetch(
      `${GITHUB_RAW}/${owner}/${repo}/main/data/jobs/${slug}.json`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) return { title: "Job Not Found" };
  return {
    title: `${job.title} at ${job.company} | JobPortal`,
    description: job.description.slice(0, 160),
  };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) notFound();

  const fmtSalary = (min: number, max: number, cur: string) =>
    cur === "INR"
      ? `₹${(min / 100000).toFixed(0)}L – ₹${(max / 100000).toFixed(0)}L`
      : `${new Intl.NumberFormat("en-US", { style: "currency", currency: cur, maximumFractionDigits: 0 }).format(min)} – ${new Intl.NumberFormat("en-US", { style: "currency", currency: cur, maximumFractionDigits: 0 }).format(max)}`;

  const empLabel: Record<string, string> = {
    FULL_TIME: "Full Time", PART_TIME: "Part Time",
    CONTRACTOR: "Contract", TEMPORARY: "Temporary", INTERN: "Internship",
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(job.schema) }}
      />

      <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e8e8f0", fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />

        {/* Header */}
        <header style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(10px)", background: "rgba(10,10,15,0.85)", position: "sticky", top: 0, zIndex: 100 }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg, #6366f1, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💼</div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#e8e8f0" }}>JobPortal</span>
          </a>
          <a href="/jobs" style={{ padding: "7px 16px", borderRadius: 8, textDecoration: "none", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af", fontSize: 13 }}>← All Jobs</a>
        </header>

        <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px", position: "relative", zIndex: 1 }}>
          {/* Job Header Card */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "36px", marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24 }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, background: `hsl(${job.company.charCodeAt(0) * 7 % 360}, 40%, 25%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}>
                {job.company.charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, margin: "0 0 6px", letterSpacing: "-0.5px", lineHeight: 1.2 }}>{job.title}</h1>
                <div style={{ fontSize: 16, color: "#9ca3af", marginBottom: 12 }}>{job.company}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  <span style={{ padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 600, background: job.isRemote ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.12)", color: job.isRemote ? "#34d399" : "#fbbf24", border: `1px solid ${job.isRemote ? "rgba(16,185,129,0.2)" : "rgba(245,158,11,0.2)"}` }}>
                    {job.isRemote ? "🏠 Remote" : `🏢 ${job.city}`}
                  </span>
                  <span style={{ padding: "4px 12px", borderRadius: 99, fontSize: 12, background: "rgba(255,255,255,0.06)", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {empLabel[job.employmentType] || job.employmentType}
                  </span>
                  <span style={{ padding: "4px 12px", borderRadius: 99, fontSize: 12, background: "rgba(255,255,255,0.06)", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.08)" }}>
                    🌍 {job.country}
                  </span>
                </div>
              </div>
            </div>

            {/* Salary + Apply */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>Annual Salary</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: "#a5b4fc" }}>
                  {fmtSalary(job.salaryMin, job.salaryMax, job.currency)}
                </div>
              </div>
              <button style={{ padding: "13px 32px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #6366f1, #4f46e5)", color: "white", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(99,102,241,0.35)", fontFamily: "'Space Grotesk', sans-serif" }}>
                Apply Now →
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 20 }}>
            {/* Description */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "28px" }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 700, margin: "0 0 20px", color: "#e8e8f0" }}>Job Description</h2>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: "#c4c4d4", whiteSpace: "pre-line" }}>
                {job.description}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Job Details */}
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, margin: "0 0 16px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>Job Details</h3>
                {[
                  { label: "Posted", value: new Date(job.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) },
                  { label: "Valid Until", value: new Date(job.validThrough).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) },
                  { label: "Type", value: empLabel[job.employmentType] || job.employmentType },
                  { label: "Location", value: job.isRemote ? "Remote" : job.city },
                  { label: "Country", value: job.country },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 13 }}>
                    <span style={{ color: "#6b7280" }}>{label}</span>
                    <span style={{ color: "#e8e8f0", fontWeight: 500, textAlign: "right", maxWidth: 140 }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, margin: "0 0 14px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>Skills Required</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {job.skills.map(skill => (
                    <span key={skill} style={{ padding: "5px 12px", borderRadius: 8, fontSize: 12, fontWeight: 500, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#a5b4fc" }}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, margin: "0 0 14px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>About Company</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `hsl(${job.company.charCodeAt(0) * 7 % 360}, 40%, 25%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, border: "1px solid rgba(255,255,255,0.08)" }}>
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{job.company}</div>
                    <div style={{ fontSize: 12, color: "#6b7280" }}>{job.country}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
