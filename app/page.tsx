import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e8e8f0", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 24px" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(99,102,241,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 600 }}>
        <div style={{
          width: 72, height: 72, borderRadius: 20, margin: "0 auto 24px",
          background: "linear-gradient(135deg, #6366f1, #10b981)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36
        }}>💼</div>

        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 48, fontWeight: 700, letterSpacing: "-1.5px", margin: "0 0 16px", lineHeight: 1.1 }}>
          JobPortal
        </h1>
        <p style={{ fontSize: 18, color: "#6b7280", margin: "0 0 40px", lineHeight: 1.6 }}>
          Automated job listings for top countries worldwide.<br />
          5,000 unique jobs published on command.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <Link href="/jobs" style={{
            padding: "14px 36px", borderRadius: 12, textDecoration: "none",
            background: "linear-gradient(135deg, #6366f1, #4f46e5)",
            color: "white", fontWeight: 700, fontSize: 16,
            boxShadow: "0 4px 24px rgba(99,102,241,0.35)"
          }}>
            Browse Jobs →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 48 }}>
          {[
            { icon: "🌍", label: "10 Countries", desc: "US, UK, India, UAE & more" },
            { icon: "📊", label: "5,000 Jobs", desc: "Per publish session" },
            { icon: "🏠", label: "50% Remote", desc: "2,500 remote + 2,500 on-site" },
          ].map((item) => (
            <div key={item.label} style={{
              padding: "20px 16px", background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 12, color: "#4b5563" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
