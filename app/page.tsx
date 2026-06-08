import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#050508", color: "#f0f0ff", fontFamily: "'Sora', sans-serif", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Cabinet+Grotesk:wght@400;500;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-18px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse-glow { 0%,100%{opacity:0.4} 50%{opacity:0.9} }
        @keyframes slide-up { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes counter { from{opacity:0;transform:scale(0.5)} to{opacity:1;transform:scale(1)} }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(123,90,255,0.5) !important; }
        .btn-secondary:hover { transform: translateY(-2px); background: rgba(255,255,255,0.08) !important; }
        .job-card:hover { transform: translateY(-4px); border-color: rgba(123,90,255,0.4) !important; }
        .stat-card:hover { transform: scale(1.03); }
        .feature-card:hover { border-color: rgba(123,90,255,0.35) !important; background: rgba(123,90,255,0.06) !important; }
        .country-pill:hover { background: rgba(123,90,255,0.2) !important; transform: translateY(-2px); }
        * { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease; }
      `}</style>

      {/* ── BACKGROUND EFFECTS ── */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(123,90,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123,90,255,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Glow blobs */}
        <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: 900, height: 600, background: "radial-gradient(ellipse, rgba(123,90,255,0.14) 0%, transparent 70%)", animation: "pulse-glow 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "40%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "60%", right: "-5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />
        {/* Noise texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")", opacity: 0.4 }} />
      </div>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "16px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(20px)", background: "rgba(5,5,8,0.7)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #7b5aff, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💼</div>
          <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>JobPortal</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Link href="/jobs" className="btn-secondary" style={{ padding: "9px 22px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#c4c4d4", fontSize: 14, fontWeight: 500, textDecoration: "none", cursor: "pointer" }}>Browse Jobs</Link>
          <Link href="/jobs" className="btn-primary" style={{ padding: "9px 22px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #7b5aff, #5a3fd4)", color: "white", fontSize: 14, fontWeight: 600, textDecoration: "none", boxShadow: "0 4px 20px rgba(123,90,255,0.3)" }}>Get Started →</Link>
        </div>
      </nav>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", textAlign: "center" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 99, background: "rgba(123,90,255,0.1)", border: "1px solid rgba(123,90,255,0.25)", fontSize: 13, color: "#a78fff", marginBottom: 32, animation: "slide-up 0.6s ease forwards" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981", display: "inline-block" }} />
            194 Countries · 5,000 Jobs Per Session · Live Now
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 900, letterSpacing: "-3px", lineHeight: 0.95, margin: "0 0 28px", maxWidth: 900, animation: "slide-up 0.7s ease forwards" }}>
            <span style={{ display: "block", color: "#f0f0ff" }}>Find Jobs</span>
            <span style={{ display: "block", background: "linear-gradient(135deg, #7b5aff 0%, #10b981 50%, #f59e0b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Across The World</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#6b7280", maxWidth: 560, lineHeight: 1.7, margin: "0 0 44px", animation: "slide-up 0.8s ease forwards" }}>
            The world's most comprehensive automated job board. 5,000 fresh listings published across 194 countries — remote & on-site.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", animation: "slide-up 0.9s ease forwards" }}>
            <Link href="/jobs" className="btn-primary" style={{ padding: "16px 40px", borderRadius: 14, textDecoration: "none", background: "linear-gradient(135deg, #7b5aff, #5a3fd4)", color: "white", fontWeight: 700, fontSize: 17, boxShadow: "0 6px 30px rgba(123,90,255,0.4)", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Browse All Jobs <span style={{ fontSize: 20 }}>→</span>
            </Link>
            <Link href="/jobs?type=remote" className="btn-secondary" style={{ padding: "16px 40px", borderRadius: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#c4c4d4", fontWeight: 600, fontSize: 17, display: "inline-flex", alignItems: "center", gap: 8 }}>
              🏠 Remote Only
            </Link>
          </div>

          {/* Floating stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 72, maxWidth: 700, width: "100%" }}>
            {[
              { num: "970K+", label: "Total Jobs", icon: "📊", color: "#7b5aff" },
              { num: "194", label: "Countries", icon: "🌍", color: "#10b981" },
              { num: "50%", label: "Remote Jobs", icon: "🏠", color: "#f59e0b" },
            ].map(s => (
              <div key={s.label} className="stat-card" style={{ padding: "24px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, textAlign: "center", cursor: "default" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 36, fontWeight: 900, color: s.color, letterSpacing: "-1px", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "#4b5563", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div style={{ overflow: "hidden", padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)", marginBottom: 0 }}>
          <div style={{ display: "flex", animation: "marquee 30s linear infinite", width: "max-content" }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} style={{ display: "flex", gap: 40, paddingRight: 40, alignItems: "center" }}>
                {["🇺🇸 United States", "🇬🇧 United Kingdom", "🇮🇳 India", "🇩🇪 Germany", "🇦🇪 UAE", "🇸🇬 Singapore", "🇦🇺 Australia", "🇯🇵 Japan", "🇧🇷 Brazil", "🇫🇷 France", "🇨🇦 Canada", "🇳🇬 Nigeria", "🇿🇦 South Africa", "🇰🇷 South Korea", "🇲🇾 Malaysia"].map(c => (
                  <span key={c} style={{ fontSize: 14, color: "#4b5563", whiteSpace: "nowrap", fontWeight: 500 }}>{c}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── JOB CATEGORIES ── */}
        <section style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 13, color: "#7b5aff", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Job Categories</div>
            <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-1.5px", margin: 0 }}>Every Industry Covered</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
            {[
              { icon: "💻", label: "Software Dev", count: "82K+" },
              { icon: "📊", label: "Data Science", count: "34K+" },
              { icon: "🎨", label: "Design", count: "28K+" },
              { icon: "📱", label: "Mobile Dev", count: "19K+" },
              { icon: "☁️", label: "Cloud & DevOps", count: "41K+" },
              { icon: "🔐", label: "Cybersecurity", count: "22K+" },
              { icon: "📣", label: "Marketing", count: "55K+" },
              { icon: "💰", label: "Finance", count: "48K+" },
              { icon: "🏥", label: "Healthcare", count: "63K+" },
              { icon: "🎓", label: "Education", count: "37K+" },
              { icon: "⚙️", label: "Engineering", count: "71K+" },
              { icon: "📦", label: "Logistics", count: "29K+" },
            ].map(c => (
              <Link href="/jobs" key={c.label} className="feature-card" style={{ padding: "20px 14px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, textAlign: "center", textDecoration: "none", color: "inherit", display: "block", cursor: "pointer" }}>
                <div style={{ fontSize: 30, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 12, color: "#7b5aff" }}>{c.count} jobs</div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section style={{ padding: "100px 24px", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ fontSize: 13, color: "#10b981", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Why JobPortal</div>
              <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-1.5px", margin: 0 }}>Built Different</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { icon: "🌍", title: "194 Countries", desc: "From the USA to Tuvalu — every country on earth has fresh job listings updated regularly.", color: "#7b5aff", rgb: "123,90,255" },
                { icon: "⚡", title: "5,000 Per Session", desc: "Each publish session creates 5,000 unique jobs with full company details, salaries, and skills.", color: "#10b981", rgb: "16,185,129" },
                { icon: "🏠", title: "Remote & On-site", desc: "50/50 split between remote and on-site positions. Filter by your preference instantly.", color: "#f59e0b", rgb: "245,158,11" },
                { icon: "🔍", title: "Rich SEO Schema", desc: "Every job gets a dedicated page with JobPosting JSON-LD schema for Google Jobs indexing.", color: "#ec4899", rgb: "236,72,153" },
                { icon: "💰", title: "Local Salaries", desc: "Realistic salary ranges in local currencies — INR for India, AED for UAE, GBP for UK and more.", color: "#06b6d4", rgb: "6,182,212" },
                { icon: "🤖", title: "Auto Publishing", desc: "Set it and forget it — auto mode publishes all 194 countries automatically with 10-min gaps.", color: "#a78fff", rgb: "167,143,255" },
              ].map(f => (
                <div key={f.title} className="feature-card" style={{ padding: "28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(${f.rgb},0.12)`, border: `1px solid rgba(${f.rgb},0.2)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 18 }}>{f.icon}</div>
                  <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: 19, marginBottom: 10, letterSpacing: "-0.3px" }}>{f.title}</div>
                  <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAMPLE JOB CARDS ── */}
        <section style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 13, color: "#f59e0b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Latest Listings</div>
            <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-1.5px", margin: 0 }}>Fresh Jobs Today</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {[
              { title: "Senior React Developer", company: "TechCorp", city: "San Francisco", country: "🇺🇸", salary: "$120K – $160K", remote: true, skills: ["React", "TypeScript", "Node.js"] },
              { title: "Data Science Lead", company: "Analytics Hub", city: "London", country: "🇬🇧", salary: "£85K – £110K", remote: false, skills: ["Python", "ML", "TensorFlow"] },
              { title: "Product Designer", company: "DesignStudio", city: "Dubai", country: "🇦🇪", salary: "AED 180K – 240K", remote: true, skills: ["Figma", "UX", "Prototyping"] },
              { title: "DevOps Engineer", company: "CloudBase", city: "Bangalore", country: "🇮🇳", salary: "₹28L – ₹42L", remote: true, skills: ["AWS", "Docker", "Kubernetes"] },
              { title: "Marketing Manager", company: "GrowthCo", city: "Sydney", country: "🇦🇺", salary: "AUD 110K – 140K", remote: false, skills: ["SEO", "Analytics", "Content"] },
              { title: "Backend Engineer", company: "Fintech AG", city: "Berlin", country: "🇩🇪", salary: "€75K – €100K", remote: true, skills: ["Go", "PostgreSQL", "Redis"] },
            ].map(job => (
              <Link href="/jobs" key={job.title} className="job-card" style={{ display: "block", textDecoration: "none", color: "inherit", padding: "22px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `hsl(${job.company.charCodeAt(0) * 9 % 360}, 35%, 22%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
                    {job.company.charAt(0)}
                  </div>
                  <span style={{ padding: "4px 10px", borderRadius: 99, fontSize: 11, fontWeight: 700, background: job.remote ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)", color: job.remote ? "#34d399" : "#fbbf24", border: `1px solid ${job.remote ? "rgba(16,185,129,0.2)" : "rgba(245,158,11,0.2)"}` }}>
                    {job.remote ? "🏠 Remote" : "🏢 On-site"}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, letterSpacing: "-0.3px" }}>{job.title}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 12 }}>{job.company} · {job.country} {job.city}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#a78fff", marginBottom: 14 }}>{job.salary}/yr</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {job.skills.map(s => (
                    <span key={s} style={{ padding: "3px 10px", borderRadius: 6, fontSize: 11, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#6b7280" }}>{s}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/jobs" className="btn-primary" style={{ padding: "14px 40px", borderRadius: 12, textDecoration: "none", background: "linear-gradient(135deg, #7b5aff, #5a3fd4)", color: "white", fontWeight: 700, fontSize: 16, boxShadow: "0 4px 24px rgba(123,90,255,0.3)", display: "inline-block" }}>
              View All Jobs →
            </Link>
          </div>
        </section>

        {/* ── COUNTRIES ── */}
        <section style={{ padding: "100px 24px", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 13, color: "#ec4899", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Global Coverage</div>
            <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-1.5px", margin: "0 0 12px" }}>Jobs In 194 Countries</h2>
            <p style={{ color: "#6b7280", fontSize: 16, margin: "0 0 48px" }}>From major economies to emerging markets — every country covered</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {[
                "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India", "🇩🇪 Germany", "🇫🇷 France",
                "🇦🇺 Australia", "🇦🇪 UAE", "🇸🇬 Singapore", "🇯🇵 Japan", "🇧🇷 Brazil",
                "🇨🇦 Canada", "🇰🇷 South Korea", "🇳🇬 Nigeria", "🇿🇦 South Africa", "🇲🇽 Mexico",
                "🇮🇩 Indonesia", "🇵🇰 Pakistan", "🇧🇩 Bangladesh", "🇵🇭 Philippines", "🇪🇬 Egypt",
                "🇹🇷 Turkey", "🇻🇳 Vietnam", "🇮🇱 Israel", "🇶🇦 Qatar", "🇸🇦 Saudi Arabia",
                "+ 169 more countries →"
              ].map(c => (
                <Link href="/jobs" key={c} className="country-pill" style={{ padding: "8px 16px", borderRadius: 99, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 13, color: "#9ca3af", textDecoration: "none", display: "inline-block" }}>{c}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 13, color: "#06b6d4", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Simple Process</div>
            <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-1.5px", margin: 0 }}>How It Works</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { step: "01", title: "Choose Your Country", desc: "Pick from 194 countries worldwide. Each country has localized jobs with local currencies and city names.", color: "#7b5aff" },
              { step: "02", title: "Browse 5,000 Listings", desc: "Filter by remote or on-site, browse by category, or search specific roles. Every listing has salary info and required skills.", color: "#10b981" },
              { step: "03", title: "Find Your Perfect Role", desc: "Each job has a dedicated page with full details — company info, salary range, required skills, employment type, and location.", color: "#f59e0b" },
              { step: "04", title: "Apply & Get Hired", desc: "Click through to apply directly. New jobs are published regularly so check back often for fresh opportunities.", color: "#ec4899" },
            ].map((s, i) => (
              <div key={s.step} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, padding: "32px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none", alignItems: "center" }}>
                <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 56, fontWeight: 900, color: s.color, opacity: 0.25, lineHeight: 1 }}>{s.step}</div>
                <div>
                  <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 8, letterSpacing: "-0.5px" }}>{s.title}</div>
                  <div style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ borderRadius: 24, padding: "64px 48px", textAlign: "center", background: "linear-gradient(135deg, rgba(123,90,255,0.15) 0%, rgba(16,185,129,0.1) 50%, rgba(245,158,11,0.08) 100%)", border: "1px solid rgba(123,90,255,0.25)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(123,90,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
              <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-1.5px", margin: "0 0 16px" }}>
                Ready to Find Your Dream Job?
              </h2>
              <p style={{ fontSize: 17, color: "#6b7280", margin: "0 0 36px", maxWidth: 500, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
                Browse thousands of opportunities across the world. Remote, hybrid, on-site — we have it all.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/jobs" className="btn-primary" style={{ padding: "16px 44px", borderRadius: 14, textDecoration: "none", background: "linear-gradient(135deg, #7b5aff, #5a3fd4)", color: "white", fontWeight: 700, fontSize: 17, boxShadow: "0 6px 30px rgba(123,90,255,0.4)", display: "inline-block" }}>
                  Browse Jobs Now →
                </Link>
                <Link href="/jobs?type=remote" className="btn-secondary" style={{ padding: "16px 44px", borderRadius: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", color: "#c4c4d4", fontWeight: 600, fontSize: 17, display: "inline-block" }}>
                  🏠 Remote Jobs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "40px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg, #7b5aff, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>💼</div>
            <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: 16 }}>JobPortal</span>
          </div>
          <div style={{ fontSize: 13, color: "#374151" }}>© 2025 JobPortal · 194 countries · 970K+ jobs</div>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/jobs" style={{ fontSize: 13, color: "#4b5563", textDecoration: "none" }}>Browse Jobs</Link>
            <Link href="/jobs?type=remote" style={{ fontSize: 13, color: "#4b5563", textDecoration: "none" }}>Remote</Link>
            <Link href="/admin" style={{ fontSize: 13, color: "#4b5563", textDecoration: "none" }}>Admin</Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
