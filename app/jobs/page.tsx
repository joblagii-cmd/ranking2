"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const COUNTRIES = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "AE", name: "UAE", flag: "🇦🇪" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
];

interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  city: string;
  country: string;
  isRemote: boolean;
  employmentType: string;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  skills: string[];
  publishedAt: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [jobType, setJobType] = useState<"" | "remote" | "normal">("");
  const [loading, setLoading] = useState(false);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        country: selectedCountry,
        page: String(page),
        limit: "20",
        ...(jobType && { type: jobType }),
      });
      const res = await fetch(`/api/jobs?${params}`);
      const data = await res.json();
      setJobs(data.jobs || []);
      setTotal(data.total || 0);
    } finally {
      setLoading(false);
    }
  }, [selectedCountry, page, jobType]);

  useEffect(() => { fetchJobs(); }, [fetchJobs]);
  useEffect(() => { setPage(1); }, [selectedCountry, jobType]);

  const totalPages = Math.ceil(total / 20);

  const formatSalary = (min: number, max: number, currency: string) => {
    if (currency === "INR") {
      return `₹${(min / 100000).toFixed(0)}L – ₹${(max / 100000).toFixed(0)}L`;
    }
    const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(n);
    return `${fmt(min)} – ${fmt(max)}`;
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e8e8f0", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />

      <div style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 60%)", position: "fixed", inset: 0, pointerEvents: "none" }} />

      {/* Header */}
      <header style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "20px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        backdropFilter: "blur(10px)", background: "rgba(10,10,15,0.85)",
        position: "sticky", top: 0, zIndex: 100
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg, #6366f1, #10b981)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17
          }}>💼</div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 17, color: "#e8e8f0" }}>JobPortal</span>
        </Link>
        <Link href="/admin" style={{
          padding: "8px 16px", borderRadius: 8, textDecoration: "none",
          background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)",
          color: "#a5b4fc", fontSize: 13, fontWeight: 500
        }}>⚙️ Admin</Link>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-1px" }}>
            Find Your Next <span style={{ background: "linear-gradient(135deg, #6366f1, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Job</span>
          </h1>
          <p style={{ color: "#6b7280", fontSize: 15, margin: 0 }}>
            {total.toLocaleString()} opportunities available
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            style={{
              padding: "10px 16px", background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10,
              color: "#e8e8f0", fontSize: 14, cursor: "pointer", outline: "none",
              fontFamily: "'DM Sans', sans-serif"
            }}
          >
            {COUNTRIES.map(c => (
              <option key={c.code} value={c.code} style={{ background: "#1a1a2e" }}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>

          {["", "remote", "normal"].map((type) => (
            <button key={type} onClick={() => setJobType(type as "" | "remote" | "normal")} style={{
              padding: "10px 18px", borderRadius: 10, border: "1px solid",
              borderColor: jobType === type ? "#6366f1" : "rgba(255,255,255,0.1)",
              background: jobType === type ? "rgba(99,102,241,0.15)" : "transparent",
              color: jobType === type ? "#a5b4fc" : "#9ca3af",
              fontSize: 13, fontWeight: 500, cursor: "pointer"
            }}>
              {type === "" ? "All Jobs" : type === "remote" ? "🏠 Remote" : "🏢 On-site"}
            </button>
          ))}
        </div>

        {/* Job Grid */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#4b5563" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
            <div>Loading jobs...</div>
          </div>
        ) : jobs.length === 0 ? (
          <div style={{
            textAlign: "center", padding: "60px 24px",
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16, color: "#4b5563"
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
            <div style={{ fontSize: 16, fontWeight: 500 }}>No jobs published yet</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>
              Go to <Link href="/admin" style={{ color: "#6366f1" }}>Admin</Link> to publish jobs.
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {jobs.map((job) => (
              <div key={job.id} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, padding: "20px", transition: "border-color 0.2s, transform 0.2s",
                cursor: "pointer"
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.3)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `hsl(${job.company.charCodeAt(0) * 7 % 360}, 50%, 25%)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, border: "1px solid rgba(255,255,255,0.1)"
                  }}>
                    {job.company.charAt(0)}
                  </div>
                  <span style={{
                    padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 600,
                    background: job.isRemote ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.12)",
                    color: job.isRemote ? "#34d399" : "#fbbf24",
                    border: `1px solid ${job.isRemote ? "rgba(16,185,129,0.2)" : "rgba(245,158,11,0.2)"}`
                  }}>
                    {job.isRemote ? "Remote" : "On-site"}
                  </span>
                </div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4, lineHeight: 1.3 }}>{job.title}</div>
                <div style={{ color: "#9ca3af", fontSize: 13, marginBottom: 10 }}>
                  {job.company} · {job.city}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#a5b4fc", marginBottom: 12 }}>
                  {formatSalary(job.salaryMin, job.salaryMax, job.currency)}/yr
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {job.skills.slice(0, 3).map(skill => (
                    <span key={skill} style={{
                      padding: "2px 8px", borderRadius: 6, fontSize: 11,
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                      color: "#9ca3af"
                    }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{
              padding: "9px 18px", borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)",
              background: "transparent", color: page === 1 ? "#374151" : "#9ca3af",
              cursor: page === 1 ? "not-allowed" : "pointer", fontSize: 13
            }}>← Prev</button>
            <span style={{ padding: "9px 18px", color: "#6b7280", fontSize: 13 }}>
              {page} / {totalPages} ({total.toLocaleString()} jobs)
            </span>
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{
              padding: "9px 18px", borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)",
              background: "transparent", color: page === totalPages ? "#374151" : "#9ca3af",
              cursor: page === totalPages ? "not-allowed" : "pointer", fontSize: 13
            }}>Next →</button>
          </div>
        )}
      </main>
    </div>
  );
}
