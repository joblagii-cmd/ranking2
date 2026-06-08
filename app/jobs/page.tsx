"use client";

import { useState, useEffect, useCallback } from "react";

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
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "CZ", name: "Czech Republic", flag: "🇨🇿" },
  { code: "HU", name: "Hungary", flag: "🇭🇺" },
  { code: "RO", name: "Romania", flag: "🇷🇴" },
  { code: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "HR", name: "Croatia", flag: "🇭🇷" },
  { code: "SK", name: "Slovakia", flag: "🇸🇰" },
  { code: "BG", name: "Bulgaria", flag: "🇧🇬" },
  { code: "RS", name: "Serbia", flag: "🇷🇸" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦" },
  { code: "LU", name: "Luxembourg", flag: "🇱🇺" },
  { code: "IS", name: "Iceland", flag: "🇮🇸" },
  { code: "MT", name: "Malta", flag: "🇲🇹" },
  { code: "CY", name: "Cyprus", flag: "🇨🇾" },
  { code: "EE", name: "Estonia", flag: "🇪🇪" },
  { code: "LV", name: "Latvia", flag: "🇱🇻" },
  { code: "LT", name: "Lithuania", flag: "🇱🇹" },
  { code: "SI", name: "Slovenia", flag: "🇸🇮" },
  { code: "MK", name: "North Macedonia", flag: "🇲🇰" },
  { code: "AL", name: "Albania", flag: "🇦🇱" },
  { code: "BA", name: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { code: "ME", name: "Montenegro", flag: "🇲🇪" },
  { code: "MD", name: "Moldova", flag: "🇲🇩" },
  { code: "BY", name: "Belarus", flag: "🇧🇾" },
  { code: "XK", name: "Kosovo", flag: "🇽🇰" },
  { code: "LI", name: "Liechtenstein", flag: "🇱🇮" },
  { code: "SM", name: "San Marino", flag: "🇸🇲" },
  { code: "AD", name: "Andorra", flag: "🇦🇩" },
  { code: "MC", name: "Monaco", flag: "🇲🇨" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "MM", name: "Myanmar", flag: "🇲🇲" },
  { code: "KH", name: "Cambodia", flag: "🇰🇭" },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰" },
  { code: "TW", name: "Taiwan", flag: "🇹🇼" },
  { code: "MN", name: "Mongolia", flag: "🇲🇳" },
  { code: "NP", name: "Nepal", flag: "🇳🇵" },
  { code: "UZ", name: "Uzbekistan", flag: "🇺🇿" },
  { code: "KZ", name: "Kazakhstan", flag: "🇰🇿" },
  { code: "GE", name: "Georgia", flag: "🇬🇪" },
  { code: "AM", name: "Armenia", flag: "🇦🇲" },
  { code: "AZ", name: "Azerbaijan", flag: "🇦🇿" },
  { code: "IL", name: "Israel", flag: "🇮🇱" },
  { code: "JO", name: "Jordan", flag: "🇯🇴" },
  { code: "LB", name: "Lebanon", flag: "🇱🇧" },
  { code: "KW", name: "Kuwait", flag: "🇰🇼" },
  { code: "QA", name: "Qatar", flag: "🇶🇦" },
  { code: "BH", name: "Bahrain", flag: "🇧🇭" },
  { code: "OM", name: "Oman", flag: "🇴🇲" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "IQ", name: "Iraq", flag: "🇮🇶" },
  { code: "IR", name: "Iran", flag: "🇮🇷" },
  { code: "AF", name: "Afghanistan", flag: "🇦🇫" },
  { code: "LA", name: "Laos", flag: "🇱🇦" },
  { code: "BT", name: "Bhutan", flag: "🇧🇹" },
  { code: "MV", name: "Maldives", flag: "🇲🇻" },
  { code: "TL", name: "Timor-Leste", flag: "🇹🇱" },
  { code: "BN", name: "Brunei", flag: "🇧🇳" },
  { code: "TJ", name: "Tajikistan", flag: "🇹🇯" },
  { code: "TM", name: "Turkmenistan", flag: "🇹🇲" },
  { code: "KG", name: "Kyrgyzstan", flag: "🇰🇬" },
  { code: "SY", name: "Syria", flag: "🇸🇾" },
  { code: "YE", name: "Yemen", flag: "🇾🇪" },
  { code: "PS", name: "Palestine", flag: "🇵🇸" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "PE", name: "Peru", flag: "🇵🇪" },
  { code: "VE", name: "Venezuela", flag: "🇻🇪" },
  { code: "EC", name: "Ecuador", flag: "🇪🇨" },
  { code: "BO", name: "Bolivia", flag: "🇧🇴" },
  { code: "PY", name: "Paraguay", flag: "🇵🇾" },
  { code: "UY", name: "Uruguay", flag: "🇺🇾" },
  { code: "CR", name: "Costa Rica", flag: "🇨🇷" },
  { code: "PA", name: "Panama", flag: "🇵🇦" },
  { code: "GT", name: "Guatemala", flag: "🇬🇹" },
  { code: "HN", name: "Honduras", flag: "🇭🇳" },
  { code: "SV", name: "El Salvador", flag: "🇸🇻" },
  { code: "NI", name: "Nicaragua", flag: "🇳🇮" },
  { code: "CU", name: "Cuba", flag: "🇨🇺" },
  { code: "DO", name: "Dominican Republic", flag: "🇩🇴" },
  { code: "JM", name: "Jamaica", flag: "🇯🇲" },
  { code: "TT", name: "Trinidad and Tobago", flag: "🇹🇹" },
  { code: "GY", name: "Guyana", flag: "🇬🇾" },
  { code: "SR", name: "Suriname", flag: "🇸🇷" },
  { code: "BZ", name: "Belize", flag: "🇧🇿" },
  { code: "HT", name: "Haiti", flag: "🇭🇹" },
  { code: "BB", name: "Barbados", flag: "🇧🇧" },
  { code: "LC", name: "Saint Lucia", flag: "🇱🇨" },
  { code: "VC", name: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
  { code: "GD", name: "Grenada", flag: "🇬🇩" },
  { code: "AG", name: "Antigua and Barbuda", flag: "🇦🇬" },
  { code: "DM", name: "Dominica", flag: "🇩🇲" },
  { code: "KN", name: "Saint Kitts and Nevis", flag: "🇰🇳" },
  { code: "BS", name: "Bahamas", flag: "🇧🇸" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿" },
  { code: "ET", name: "Ethiopia", flag: "🇪🇹" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "DZ", name: "Algeria", flag: "🇩🇿" },
  { code: "TN", name: "Tunisia", flag: "🇹🇳" },
  { code: "CM", name: "Cameroon", flag: "🇨🇲" },
  { code: "CI", name: "Ivory Coast", flag: "🇨🇮" },
  { code: "SN", name: "Senegal", flag: "🇸🇳" },
  { code: "UG", name: "Uganda", flag: "🇺🇬" },
  { code: "ZM", name: "Zambia", flag: "🇿🇲" },
  { code: "ZW", name: "Zimbabwe", flag: "🇿🇼" },
  { code: "SD", name: "Sudan", flag: "🇸🇩" },
  { code: "AO", name: "Angola", flag: "🇦🇴" },
  { code: "MZ", name: "Mozambique", flag: "🇲🇿" },
  { code: "MG", name: "Madagascar", flag: "🇲🇬" },
  { code: "RW", name: "Rwanda", flag: "🇷🇼" },
  { code: "LY", name: "Libya", flag: "🇱🇾" },
  { code: "SO", name: "Somalia", flag: "🇸🇴" },
  { code: "CD", name: "DR Congo", flag: "🇨🇩" },
  { code: "CG", name: "Republic of Congo", flag: "🇨🇬" },
  { code: "GN", name: "Guinea", flag: "🇬🇳" },
  { code: "ML", name: "Mali", flag: "🇲🇱" },
  { code: "BF", name: "Burkina Faso", flag: "🇧🇫" },
  { code: "NE", name: "Niger", flag: "🇳🇪" },
  { code: "TD", name: "Chad", flag: "🇹🇩" },
  { code: "CF", name: "Central African Republic", flag: "🇨🇫" },
  { code: "SS", name: "South Sudan", flag: "🇸🇸" },
  { code: "ER", name: "Eritrea", flag: "🇪🇷" },
  { code: "DJ", name: "Djibouti", flag: "🇩🇯" },
  { code: "MR", name: "Mauritania", flag: "🇲🇷" },
  { code: "GM", name: "Gambia", flag: "🇬🇲" },
  { code: "GW", name: "Guinea-Bissau", flag: "🇬🇼" },
  { code: "SL", name: "Sierra Leone", flag: "🇸🇱" },
  { code: "LR", name: "Liberia", flag: "🇱🇷" },
  { code: "TG", name: "Togo", flag: "🇹🇬" },
  { code: "BJ", name: "Benin", flag: "🇧🇯" },
  { code: "GQ", name: "Equatorial Guinea", flag: "🇬🇶" },
  { code: "GA", name: "Gabon", flag: "🇬🇦" },
  { code: "ST", name: "Sao Tome and Principe", flag: "🇸🇹" },
  { code: "CV", name: "Cape Verde", flag: "🇨🇻" },
  { code: "KM", name: "Comoros", flag: "🇰🇲" },
  { code: "SC", name: "Seychelles", flag: "🇸🇨" },
  { code: "MU", name: "Mauritius", flag: "🇲🇺" },
  { code: "BI", name: "Burundi", flag: "🇧🇮" },
  { code: "MW", name: "Malawi", flag: "🇲🇼" },
  { code: "NA", name: "Namibia", flag: "🇳🇦" },
  { code: "BW", name: "Botswana", flag: "🇧🇼" },
  { code: "SZ", name: "Eswatini", flag: "🇸🇿" },
  { code: "LS", name: "Lesotho", flag: "🇱🇸" },
  { code: "FJ", name: "Fiji", flag: "🇫🇯" },
  { code: "PG", name: "Papua New Guinea", flag: "🇵🇬" },
  { code: "WS", name: "Samoa", flag: "🇼🇸" },
  { code: "TO", name: "Tonga", flag: "🇹🇴" },
  { code: "VU", name: "Vanuatu", flag: "🇻🇺" },
  { code: "SB", name: "Solomon Islands", flag: "🇸🇧" },
  { code: "KI", name: "Kiribati", flag: "🇰🇮" },
  { code: "FM", name: "Micronesia", flag: "🇫🇲" },
  { code: "MH", name: "Marshall Islands", flag: "🇲🇭" },
  { code: "PW", name: "Palau", flag: "🇵🇼" },
  { code: "NR", name: "Nauru", flag: "🇳🇷" },
  { code: "TV", name: "Tuvalu", flag: "🇹🇻" },
];

interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  city: string;
  country: string;
  countryCode: string;
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const LIMIT = 20;

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ country: selectedCountry, page: String(page), limit: String(LIMIT), ...(jobType && { type: jobType }) });
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

  const totalPages = Math.ceil(total / LIMIT);

  const fmtSalary = (min: number, max: number, cur: string) =>
    cur === "INR"
      ? `₹${(min / 100000).toFixed(0)}L – ₹${(max / 100000).toFixed(0)}L`
      : `${new Intl.NumberFormat("en-US", { style: "currency", currency: cur, maximumFractionDigits: 0 }).format(min)} – ${new Intl.NumberFormat("en-US", { style: "currency", currency: cur, maximumFractionDigits: 0 }).format(max)}`;

  const filteredCountries = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const selectedC = COUNTRIES.find(c => c.code === selectedCountry);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e8e8f0", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      <div style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 60%)", position: "fixed", inset: 0, pointerEvents: "none" }} />

      <header style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(10px)", background: "rgba(10,10,15,0.85)", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg, #6366f1, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💼</div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#e8e8f0" }}>JobPortal</span>
        </a>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 34, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-1px" }}>
            Find Your Next <span style={{ background: "linear-gradient(135deg, #6366f1, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Job</span>
          </h1>
          <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>{total.toLocaleString()} opportunities available</p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap", alignItems: "center" }}>

          {/* Searchable Country Dropdown */}
          <div style={{ position: "relative" }}>
            {/* Trigger button */}
            <div
              onClick={() => { setDropdownOpen(o => !o); setCountrySearch(""); }}
              style={{ padding: "10px 36px 10px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, color: "#e8e8f0", fontSize: 14, cursor: "pointer", minWidth: 210, userSelect: "none", display: "flex", alignItems: "center", gap: 8, position: "relative" }}
            >
              <span style={{ fontSize: 18 }}>{selectedC?.flag}</span>
              <span style={{ flex: 1 }}>{selectedC?.name}</span>
              <span style={{ position: "absolute", right: 12, color: "#6b7280", fontSize: 11, transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
            </div>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 1000, background: "#13131f", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, width: 270, boxShadow: "0 20px 60px rgba(0,0,0,0.6)", overflow: "hidden" }}>
                {/* Search box */}
                <div style={{ padding: "10px 10px 8px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "7px 10px" }}>
                    <span style={{ color: "#6b7280", fontSize: 13 }}>🔍</span>
                    <input
                      autoFocus
                      value={countrySearch}
                      onChange={e => setCountrySearch(e.target.value)}
                      placeholder="Search country..."
                      style={{ flex: 1, background: "transparent", border: "none", color: "#e8e8f0", fontSize: 13, outline: "none", fontFamily: "'DM Sans', sans-serif" }}
                    />
                    {countrySearch && (
                      <span onClick={() => setCountrySearch("")} style={{ color: "#6b7280", cursor: "pointer", fontSize: 13, lineHeight: 1 }}>✕</span>
                    )}
                  </div>
                </div>
                {/* List */}
                <div style={{ maxHeight: 280, overflowY: "auto" }}>
                  {filteredCountries.length === 0 ? (
                    <div style={{ padding: "20px", textAlign: "center", color: "#4b5563", fontSize: 13 }}>No country found</div>
                  ) : (
                    filteredCountries.map(c => (
                      <div
                        key={c.code}
                        onClick={() => { setSelectedCountry(c.code); setDropdownOpen(false); setCountrySearch(""); }}
                        style={{ padding: "9px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontSize: 13, background: selectedCountry === c.code ? "rgba(99,102,241,0.18)" : "transparent", color: selectedCountry === c.code ? "#a5b4fc" : "#e8e8f0", borderLeft: selectedCountry === c.code ? "2px solid #6366f1" : "2px solid transparent", transition: "background 0.12s" }}
                        onMouseEnter={e => { if (selectedCountry !== c.code) (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={e => { if (selectedCountry !== c.code) (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                      >
                        <span style={{ fontSize: 18, lineHeight: 1 }}>{c.flag}</span>
                        <span style={{ flex: 1 }}>{c.name}</span>
                        <span style={{ fontSize: 11, color: "#4b5563" }}>{c.code}</span>
                        {selectedCountry === c.code && <span style={{ fontSize: 12, color: "#6366f1" }}>✓</span>}
                      </div>
                    ))
                  )}
                </div>
                {/* Footer count */}
                <div style={{ padding: "6px 14px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: 11, color: "#4b5563" }}>
                  {filteredCountries.length} of {COUNTRIES.length} countries
                </div>
              </div>
            )}

            {/* Backdrop to close */}
            {dropdownOpen && (
              <div style={{ position: "fixed", inset: 0, zIndex: 999 }} onClick={() => { setDropdownOpen(false); setCountrySearch(""); }} />
            )}
          </div>

          {/* Job type filters */}
          {(["", "remote", "normal"] as const).map(type => (
            <button key={type} onClick={() => setJobType(type)} style={{ padding: "10px 18px", borderRadius: 10, border: "1px solid", borderColor: jobType === type ? "#6366f1" : "rgba(255,255,255,0.1)", background: jobType === type ? "rgba(99,102,241,0.15)" : "transparent", color: jobType === type ? "#a5b4fc" : "#9ca3af", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
              {type === "" ? "All Jobs" : type === "remote" ? "🏠 Remote" : "🏢 On-site"}
            </button>
          ))}
        </div>

        {/* Job Grid */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#4b5563" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>Loading jobs...
          </div>
        ) : jobs.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, color: "#4b5563" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
            <div style={{ fontSize: 16, fontWeight: 500 }}>No jobs published yet for this country</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>Go to <a href="/admin" style={{ color: "#6366f1" }}>Admin</a> to publish jobs.</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {jobs.map(job => (
              <a key={job.id} href={`/jobs/${job.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px", transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s", cursor: "pointer", height: "100%", boxSizing: "border-box" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.4)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(99,102,241,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: `hsl(${job.company.charCodeAt(0) * 7 % 360}, 40%, 25%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, border: "1px solid rgba(255,255,255,0.08)" }}>
                      {job.company.charAt(0)}
                    </div>
                    <span style={{ padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 600, background: job.isRemote ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.12)", color: job.isRemote ? "#34d399" : "#fbbf24", border: `1px solid ${job.isRemote ? "rgba(16,185,129,0.2)" : "rgba(245,158,11,0.2)"}` }}>
                      {job.isRemote ? "Remote" : "On-site"}
                    </span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4, lineHeight: 1.3 }}>{job.title}</div>
                  <div style={{ color: "#9ca3af", fontSize: 13, marginBottom: 10 }}>{job.company} · {job.city}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#a5b4fc", marginBottom: 12 }}>
                    {fmtSalary(job.salaryMin, job.salaryMax, job.currency)}/yr
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {job.skills.slice(0, 3).map(skill => (
                      <span key={skill} style={{ padding: "2px 8px", borderRadius: 6, fontSize: 11, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#9ca3af" }}>{skill}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32, alignItems: "center" }}>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{ padding: "9px 18px", borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: page === 1 ? "#374151" : "#9ca3af", cursor: page === 1 ? "not-allowed" : "pointer", fontSize: 13 }}>← Prev</button>
            <span style={{ padding: "9px 16px", color: "#6b7280", fontSize: 13 }}>{page} / {totalPages} &nbsp;·&nbsp; {total.toLocaleString()} jobs</span>
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{ padding: "9px 18px", borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: page === totalPages ? "#374151" : "#9ca3af", cursor: page === totalPages ? "not-allowed" : "pointer", fontSize: 13 }}>Next →</button>
          </div>
        )}
      </main>
    </div>
  );
}
