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
];

const ADMIN_PASSWORD = "Amituwit92";
const STORAGE_KEY = "jobportal_companies";
const LOGS_KEY = "jobportal_logs";

interface PublishLog {
  countryCode: string;
  country: string;
  publishedAt: string;
  totalJobs: number;
  remoteJobs: number;
  normalJobs: number;
}

// ── helpers ──────────────────────────────────────────────────────────
function loadCompanies(): Record<string, string[]> {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; }
}
function saveCompanies(data: Record<string, string[]>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function loadLogs(): PublishLog[] {
  try { return JSON.parse(localStorage.getItem(LOGS_KEY) || "[]"); } catch { return []; }
}
function saveLogs(logs: PublishLog[]) {
  localStorage.setItem(LOGS_KEY, JSON.stringify(logs.slice(0, 100)));
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("US");
  const [companies, setCompanies] = useState<Record<string, string[]>>({});
  const [newCompany, setNewCompany] = useState("");
  const [bulkText, setBulkText] = useState("");
  const [showBulk, setShowBulk] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishResult, setPublishResult] = useState<{ success?: boolean; message?: string; stats?: { total: number; remote: number; normal: number } } | null>(null);
  const [logs, setLogs] = useState<PublishLog[]>([]);
  const [activeTab, setActiveTab] = useState<"manage" | "logs">("manage");
  const [progress, setProgress] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    if (authed) {
      setCompanies(loadCompanies());
      setLogs(loadLogs());
    }
  }, [authed]);

  const countryCompanies = companies[selectedCountry] || [];

  const handleLogin = () => {
    if (pwInput === ADMIN_PASSWORD) { setAuthed(true); setPwError(false); }
    else { setPwError(true); setPwInput(""); }
  };

  const addCompany = useCallback(() => {
    const trimmed = newCompany.trim();
    if (!trimmed) return;
    const data = loadCompanies();
    if (!data[selectedCountry]) data[selectedCountry] = [];
    if (!data[selectedCountry].includes(trimmed)) {
      data[selectedCountry].push(trimmed);
      saveCompanies(data);
      setCompanies({ ...data });
    }
    setNewCompany("");
  }, [newCompany, selectedCountry]);

  const addBulkCompanies = useCallback(() => {
    const lines = bulkText.split("\n").map(l => l.trim()).filter(Boolean);
    if (!lines.length) return;
    const data = loadCompanies();
    if (!data[selectedCountry]) data[selectedCountry] = [];
    lines.forEach(c => {
      if (!data[selectedCountry].includes(c)) data[selectedCountry].push(c);
    });
    saveCompanies(data);
    setCompanies({ ...data });
    setBulkText("");
    setShowBulk(false);
  }, [bulkText, selectedCountry]);

  const removeCompany = useCallback((company: string) => {
    const data = loadCompanies();
    if (data[selectedCountry]) {
      data[selectedCountry] = data[selectedCountry].filter(c => c !== company);
      saveCompanies(data);
      setCompanies({ ...data });
    }
  }, [selectedCountry]);

  // ── Job generation (client-side, no API needed) ───────────────────
  const JOB_TITLES = ["Software Engineer","Senior Software Engineer","Full Stack Developer","Frontend Developer","Backend Developer","DevOps Engineer","Cloud Architect","Data Scientist","Machine Learning Engineer","Data Analyst","Product Manager","Project Manager","Scrum Master","Business Analyst","UX Designer","UI Designer","Graphic Designer","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Writer","Copywriter","Social Media Manager","Sales Manager","Account Executive","Customer Success Manager","HR Manager","Recruiter","Finance Manager","Accountant","Financial Analyst","Operations Manager","Supply Chain Manager","Logistics Coordinator","Quality Assurance Engineer","Security Engineer","Network Engineer","Systems Administrator","Database Administrator","Mobile Developer","iOS Developer","Android Developer","React Native Developer","Flutter Developer","Technical Writer","Solutions Architect","IT Support Specialist","Data Engineer","BI Developer","Automation Engineer"];
  const SENIORITY = ["Junior","Mid-Level","Senior","Lead","Principal","Staff","Associate"];
  const EMP_TYPES = ["FULL_TIME","PART_TIME","CONTRACTOR","TEMPORARY"];
  const CITIES: Record<string,string[]> = {
    US:["New York","Los Angeles","Chicago","Houston","Phoenix","San Diego","Dallas","San Jose"],
    CA:["Toronto","Montreal","Vancouver","Calgary","Edmonton","Ottawa"],
    GB:["London","Birmingham","Manchester","Glasgow","Liverpool","Bristol"],
    IN:["Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Pune"],
    AU:["Sydney","Melbourne","Brisbane","Perth","Adelaide","Canberra"],
    DE:["Berlin","Hamburg","Munich","Cologne","Frankfurt","Stuttgart"],
    FR:["Paris","Marseille","Lyon","Toulouse","Nice","Nantes"],
    AE:["Dubai","Abu Dhabi","Sharjah","Al Ain","Ajman"],
    SG:["Singapore City","Jurong East","Tampines","Woodlands"],
    NZ:["Auckland","Wellington","Christchurch","Hamilton","Tauranga"],
  };
  const SALARY: Record<string,[number,number][]> = {
    US:[[50000,80000],[80000,120000],[120000,160000],[160000,200000],[200000,280000]],
    CA:[[45000,70000],[70000,100000],[100000,140000],[140000,180000]],
    GB:[[30000,50000],[50000,75000],[75000,100000],[100000,140000]],
    IN:[[300000,600000],[600000,1200000],[1200000,2000000],[2000000,3500000]],
    AU:[[55000,80000],[80000,110000],[110000,150000],[150000,200000]],
    DE:[[35000,55000],[55000,80000],[80000,110000],[110000,150000]],
    FR:[[30000,50000],[50000,70000],[70000,100000],[100000,140000]],
    AE:[[60000,100000],[100000,150000],[150000,220000],[220000,300000]],
    SG:[[40000,70000],[70000,100000],[100000,140000],[140000,200000]],
    NZ:[[45000,70000],[70000,95000],[95000,130000],[130000,180000]],
  };
  const CURRENCY: Record<string,string> = {US:"USD",CA:"CAD",GB:"GBP",IN:"INR",AU:"AUD",DE:"EUR",FR:"EUR",AE:"AED",SG:"SGD",NZ:"NZD"};
  const SKILLS_POOL = ["JavaScript","TypeScript","Python","React","Node.js","AWS","Docker","Kubernetes","SQL","Git","REST APIs","GraphQL","CI/CD","Agile","Figma","Excel","Salesforce","HubSpot","Google Ads","SEO","TensorFlow","PyTorch","Tableau","Power BI","SAP"];
  const DESC_TEMPLATES = [
    (t:string,c:string,s:string,sal:string,exp:number,remote:boolean)=>`We are looking for a talented ${t} to join our dynamic team at ${c}.\n\nKey Responsibilities:\n- Design, develop, and maintain high-quality solutions\n- Collaborate with cross-functional teams\n- Participate in code/work reviews and best practices\n- Mentor junior team members\n- Communicate effectively with stakeholders\n\nRequirements:\n- ${exp}+ years of relevant experience\n- Strong proficiency in ${s}\n- Excellent problem-solving skills\n- Bachelor's degree or equivalent experience\n\nWhat We Offer:\n- Competitive salary: ${sal}/year\n- ${remote?"100% Remote — work from anywhere":"Hybrid work options available"}\n- Health, dental & vision insurance\n- Learning and development budget\n- Generous PTO and paid holidays`,
    (t:string,c:string,s:string,sal:string,exp:number,remote:boolean)=>`${c} is seeking a passionate ${t} to shape the future of our products.\n\nWhat You'll Do:\n- Lead initiatives from conception to delivery\n- Work with stakeholders to identify opportunities\n- Analyze data and metrics to drive improvements\n- Stay up-to-date with industry trends\n\nYour Background:\n- ${exp}+ years of experience in a similar role\n- Expertise in ${s}\n- Proven track record in a fast-paced environment\n- Strong analytical and communication skills\n\nCompensation & Benefits:\n- Annual salary: ${sal}\n- ${remote?"Fully remote position":"Office-based with flexible hours"}\n- Stock options / performance bonus\n- Premium health insurance\n- 401k/pension with company match`,
    (t:string,c:string,s:string,sal:string,exp:number,remote:boolean)=>`Join ${c} as a ${t} and be part of our mission to transform the industry.\n\nDay-to-Day Responsibilities:\n- Plan and execute projects to meet deadlines\n- Collaborate across departments\n- Create detailed documentation and reports\n- Present findings to leadership\n- Continuously improve processes\n\nMust-Have Qualifications:\n- Minimum ${exp} years as a ${t} or similar\n- In-depth knowledge of ${s}\n- Strong attention to detail\n- Ability to manage multiple projects\n\nPerks & Benefits:\n- Salary: ${sal}/year\n- ${remote?"Remote-first culture":"Modern office with great amenities"}\n- Health and wellness allowance\n- Professional development opportunities\n- Team offsites and company events`,
  ];

  const rand = <T,>(arr:T[]):T => arr[Math.floor(Math.random()*arr.length)];
  const randInt = (min:number,max:number) => Math.floor(Math.random()*(max-min+1))+min;
  const slugify = (s:string) => s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  const fmtSalary = (min:number,max:number,cur:string) => cur==="INR" ? `₹${(min/100000).toFixed(0)}L–₹${(max/100000).toFixed(0)}L` : `${new Intl.NumberFormat("en-US",{style:"currency",currency:cur,maximumFractionDigits:0}).format(min)}–${new Intl.NumberFormat("en-US",{style:"currency",currency:cur,maximumFractionDigits:0}).format(max)}`;

  const publishJobs = async () => {
    if (countryCompanies.length === 0) { setPublishResult({ success:false, message:"Please add at least one company first." }); return; }
    setPublishing(true); setPublishResult(null); setProgress(0);
    const interval = setInterval(() => setProgress(p => Math.min(p + Math.random()*6, 90)), 300);

    try {
      const TOTAL = 5000;
      const publishedAt = new Date();
      const validThrough = new Date(publishedAt); validThrough.setFullYear(validThrough.getFullYear()+1);
      const currency = CURRENCY[selectedCountry] || "USD";
      const cities = CITIES[selectedCountry] || ["City"];
      const salaryRanges = SALARY[selectedCountry] || SALARY["US"];
      const country = COUNTRIES.find(c => c.code === selectedCountry)!;
      const jobs = [];

      for (let i = 0; i < TOTAL; i++) {
        const isRemote = i < TOTAL/2;
        const baseTitle = rand(JOB_TITLES);
        const title = `${rand(SENIORITY)} ${baseTitle}`;
        const company = rand(countryCompanies);
        const city = isRemote ? "Remote" : rand(cities);
        const skills = [...SKILLS_POOL].sort(()=>0.5-Math.random()).slice(0,4).join(", ");
        const empType = rand(EMP_TYPES);
        const [sMin,sMax] = rand(salaryRanges);
        const salary = fmtSalary(sMin,sMax,currency);
        const exp = randInt(1,10);
        const desc = rand(DESC_TEMPLATES)(title,company,skills,salary,exp,isRemote);
        const id = `${selectedCountry.toLowerCase()}-${i+1}-${Date.now()}`;
        const slug = `${slugify(title)}-${slugify(company)}-${i+1}`;

        const schema = {
          "@context":"https://schema.org",
          "@type":"JobPosting",
          title, description:desc,
          identifier:{"@type":"PropertyValue",name:company,value:id},
          datePosted:publishedAt.toISOString(),
          validThrough:validThrough.toISOString(),
          employmentType:empType,
          hiringOrganization:{"@type":"Organization",name:company,sameAs:`https://www.${slugify(company)}.com`},
          jobLocation:isRemote
            ? {"@type":"Place",address:{"@type":"PostalAddress",addressCountry:selectedCountry}}
            : {"@type":"Place",address:{"@type":"PostalAddress",addressLocality:city,addressCountry:selectedCountry}},
          ...(isRemote && {applicantLocationRequirements:{"@type":"Country",name:country.name},jobLocationType:"TELECOMMUTE"}),
          baseSalary:{"@type":"MonetaryAmount",currency,value:{"@type":"QuantitativeValue",minValue:sMin,maxValue:sMax,unitText:"YEAR"}},
        };

        jobs.push({ id,slug,title,company,countryCode:selectedCountry,country:country.name,city,isRemote,employmentType:empType,salaryMin:sMin,salaryMax:sMax,currency,description:desc,skills:skills.split(", "),publishedAt:publishedAt.toISOString(),validThrough:validThrough.toISOString(),schema });
      }

      // Save jobs to localStorage (chunked — 500 per key to avoid quota)
      const CHUNK = 500;
      let chunkCount = 0;
      for (let i = 0; i < jobs.length; i += CHUNK) {
        localStorage.setItem(`jobs_${selectedCountry}_${chunkCount}`, JSON.stringify(jobs.slice(i, i+CHUNK)));
        chunkCount++;
      }
      localStorage.setItem(`jobs_${selectedCountry}_count`, String(chunkCount));
      localStorage.setItem(`jobs_${selectedCountry}_meta`, JSON.stringify({ total:jobs.length, publishedAt:publishedAt.toISOString() }));

      // Save log
      const newLog: PublishLog = { countryCode:selectedCountry, country:country.name, publishedAt:publishedAt.toISOString(), totalJobs:jobs.length, remoteJobs:jobs.filter(j=>j.isRemote).length, normalJobs:jobs.filter(j=>!j.isRemote).length };
      const updatedLogs = [newLog, ...loadLogs()].slice(0,100);
      saveLogs(updatedLogs);
      setLogs(updatedLogs);

      clearInterval(interval); setProgress(100);
      setPublishResult({ success:true, message:`Successfully published ${jobs.length.toLocaleString()} jobs for ${country.name}!`, stats:{ total:jobs.length, remote:jobs.filter(j=>j.isRemote).length, normal:jobs.filter(j=>!j.isRemote).length } });
    } catch(e) {
      clearInterval(interval);
      setPublishResult({ success:false, message:"Error generating jobs. Try reducing batch size." });
      console.error(e);
    } finally {
      setPublishing(false);
      setTimeout(()=>setProgress(0),2000);
    }
  };

  const selectedCountryObj = COUNTRIES.find(c => c.code === selectedCountry);

  // ── Password Screen ───────────────────────────────────────────────
  if (!authed) return (
    <div style={{ minHeight:"100vh",background:"#0a0a0f",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
      <div style={{ position:"fixed",inset:0,background:"radial-gradient(ellipse at 50% 30%, rgba(99,102,241,0.1) 0%, transparent 60%)",pointerEvents:"none" }} />
      <div style={{ position:"relative",zIndex:1,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding:"48px 40px",width:"100%",maxWidth:380,textAlign:"center" }}>
        <div style={{ width:56,height:56,borderRadius:16,margin:"0 auto 20px",background:"linear-gradient(135deg, #6366f1, #10b981)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26 }}>🔐</div>
        <h1 style={{ fontFamily:"'Space Grotesk', sans-serif",fontSize:22,fontWeight:700,color:"#e8e8f0",margin:"0 0 6px" }}>Admin Access</h1>
        <p style={{ color:"#4b5563",fontSize:13,margin:"0 0 28px" }}>Enter password to continue</p>
        <input type="password" value={pwInput} onChange={e=>{setPwInput(e.target.value);setPwError(false);}} onKeyDown={e=>e.key==="Enter"&&handleLogin()} placeholder="Password" autoFocus
          style={{ width:"100%",padding:"13px 16px",borderRadius:10,background:"rgba(255,255,255,0.05)",border:`1px solid ${pwError?"rgba(239,68,68,0.5)":"rgba(255,255,255,0.12)"}`,color:"#e8e8f0",fontSize:15,outline:"none",fontFamily:"'DM Sans', sans-serif",boxSizing:"border-box",marginBottom:8 }} />
        {pwError && <p style={{ color:"#f87171",fontSize:13,margin:"0 0 12px",textAlign:"left" }}>❌ Wrong password. Try again.</p>}
        <button onClick={handleLogin} style={{ width:"100%",padding:"13px",borderRadius:10,border:"none",background:"linear-gradient(135deg, #6366f1, #4f46e5)",color:"white",fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"'Space Grotesk', sans-serif",marginTop:8,boxShadow:"0 4px 20px rgba(99,102,241,0.3)" }}>Login →</button>
      </div>
    </div>
  );

  // ── Admin Panel ───────────────────────────────────────────────────
  return (
    <div style={{ minHeight:"100vh",background:"#0a0a0f",color:"#e8e8f0",fontFamily:"'DM Sans', sans-serif" }}>
      <div style={{ position:"fixed",inset:0,zIndex:0,background:"radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.08) 0%, transparent 60%)",pointerEvents:"none" }} />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />

      <div style={{ position:"relative",zIndex:1 }}>
        <header style={{ borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"18px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",backdropFilter:"blur(10px)",background:"rgba(10,10,15,0.8)",position:"sticky",top:0,zIndex:100 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12 }}>
            <div style={{ width:36,height:36,borderRadius:10,background:"linear-gradient(135deg, #6366f1, #10b981)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17 }}>💼</div>
            <div>
              <div style={{ fontFamily:"'Space Grotesk', sans-serif",fontWeight:700,fontSize:17,letterSpacing:"-0.5px" }}>JobPortal Admin</div>
              <div style={{ fontSize:11,color:"#6b7280",marginTop:1 }}>Job Publishing Dashboard</div>
            </div>
          </div>
          <div style={{ display:"flex",gap:8,alignItems:"center" }}>
            {["manage","logs"].map(tab=>(
              <button key={tab} onClick={()=>setActiveTab(tab as "manage"|"logs")} style={{ padding:"7px 16px",borderRadius:8,border:"1px solid",borderColor:activeTab===tab?"#6366f1":"rgba(255,255,255,0.1)",background:activeTab===tab?"rgba(99,102,241,0.15)":"transparent",color:activeTab===tab?"#a5b4fc":"#9ca3af",fontSize:13,fontWeight:500,cursor:"pointer" }}>
                {tab==="manage"?"⚙️ Manage":"📋 Logs"}
              </button>
            ))}
            <button onClick={()=>setAuthed(false)} style={{ padding:"7px 14px",borderRadius:8,border:"1px solid rgba(239,68,68,0.3)",background:"rgba(239,68,68,0.08)",color:"#f87171",fontSize:13,cursor:"pointer" }}>Logout</button>
          </div>
        </header>

        <main style={{ maxWidth:980,margin:"0 auto",padding:"36px 24px" }}>
          {activeTab==="manage" ? (
            <div>
              <div style={{ marginBottom:28 }}>
                <h1 style={{ fontFamily:"'Space Grotesk', sans-serif",fontSize:26,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.5px" }}>Job Publishing Control</h1>
                <p style={{ color:"#6b7280",fontSize:14,margin:0 }}>Select country → Add companies → Publish 5,000 jobs</p>
              </div>

              {/* Step 1 */}
              <div style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,padding:24,marginBottom:20 }}>
                <label style={{ display:"block",fontSize:12,fontWeight:600,color:"#6366f1",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:12 }}>Step 1 — Select Country</label>
                <div style={{ position:"relative",maxWidth:340 }}>
                  <select value={selectedCountry} onChange={e=>{setSelectedCountry(e.target.value);setPublishResult(null);}}
                    style={{ width:"100%",padding:"12px 40px 12px 16px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:10,color:"#e8e8f0",fontSize:15,fontWeight:500,appearance:"none",cursor:"pointer",outline:"none",fontFamily:"'DM Sans', sans-serif" }}>
                    {COUNTRIES.map(c=><option key={c.code} value={c.code} style={{ background:"#1a1a2e" }}>{c.flag}  {c.name}</option>)}
                  </select>
                  <span style={{ position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",pointerEvents:"none",color:"#6b7280" }}>▾</span>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,padding:24,marginBottom:20 }}>
                <label style={{ display:"block",fontSize:12,fontWeight:600,color:"#10b981",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:14 }}>
                  Step 2 — Add Companies for {selectedCountryObj?.flag} {selectedCountryObj?.name}
                </label>

                <div style={{ display:"flex",gap:8,marginBottom:12 }}>
                  <input type="text" value={newCompany} onChange={e=>setNewCompany(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addCompany()} placeholder="Type company name and press Enter..."
                    style={{ flex:1,padding:"11px 14px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:10,color:"#e8e8f0",fontSize:14,outline:"none",fontFamily:"'DM Sans', sans-serif" }} />
                  <button onClick={addCompany} style={{ padding:"11px 20px",borderRadius:10,border:"none",background:"linear-gradient(135deg, #10b981, #059669)",color:"white",fontWeight:600,fontSize:14,cursor:"pointer" }}>+ Add</button>
                  <button onClick={()=>setShowBulk(!showBulk)} style={{ padding:"11px 16px",borderRadius:10,border:"1px solid rgba(99,102,241,0.3)",background:showBulk?"rgba(99,102,241,0.15)":"transparent",color:"#a5b4fc",fontWeight:600,fontSize:13,cursor:"pointer",whiteSpace:"nowrap" }}>📋 Bulk Add</button>
                </div>

                {showBulk && (
                  <div style={{ marginBottom:16,padding:16,background:"rgba(99,102,241,0.06)",border:"1px solid rgba(99,102,241,0.2)",borderRadius:12 }}>
                    <p style={{ fontSize:12,color:"#a5b4fc",margin:"0 0 10px" }}>📌 Paste companies — <strong>1 company per line</strong></p>
                    <textarea value={bulkText} onChange={e=>setBulkText(e.target.value)} placeholder={"Google\nMicrosoft\nAmazon\nApple\nMeta"} rows={6}
                      style={{ width:"100%",padding:"10px 14px",borderRadius:10,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#e8e8f0",fontSize:14,outline:"none",resize:"vertical",fontFamily:"'DM Sans', sans-serif",boxSizing:"border-box" }} />
                    <div style={{ display:"flex",gap:8,marginTop:10 }}>
                      <button onClick={addBulkCompanies} style={{ padding:"9px 20px",borderRadius:9,border:"none",background:"linear-gradient(135deg, #6366f1, #4f46e5)",color:"white",fontWeight:600,fontSize:13,cursor:"pointer" }}>
                        ✅ Add {bulkText.split("\n").filter(l=>l.trim()).length} Companies
                      </button>
                      <button onClick={()=>{setShowBulk(false);setBulkText("");}} style={{ padding:"9px 16px",borderRadius:9,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#9ca3af",fontSize:13,cursor:"pointer" }}>Cancel</button>
                    </div>
                  </div>
                )}

                {/* Companies list */}
                <div style={{ fontSize:13,color:"#6b7280",marginBottom:10 }}>
                  {countryCompanies.length===0 ? "No companies added yet for this country." : `${countryCompanies.length} companies listed for ${selectedCountryObj?.name}:`}
                </div>
                {countryCompanies.length>0 && (
                  <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:8,maxHeight:240,overflowY:"auto" }}>
                    {countryCompanies.map(c=>(
                      <div key={c} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 12px",borderRadius:8,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)" }}>
                        <span style={{ fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>🏢 {c}</span>
                        <button onClick={()=>removeCompany(c)} style={{ background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:16,padding:"0 0 0 8px",flexShrink:0 }}>×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Step 3 */}
              <div style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,padding:24 }}>
                <label style={{ display:"block",fontSize:12,fontWeight:600,color:"#f59e0b",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:16 }}>Step 3 — Publish Jobs</label>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
                  {[{label:"Total Jobs",value:"5,000",icon:"📊",color:"#6366f1",rgb:"99,102,241"},{label:"Remote Jobs",value:"2,500",icon:"🏠",color:"#10b981",rgb:"16,185,129"},{label:"On-site Jobs",value:"2,500",icon:"🏢",color:"#f59e0b",rgb:"245,158,11"}].map(s=>(
                    <div key={s.label} style={{ padding:"16px",borderRadius:10,textAlign:"center",background:`rgba(${s.rgb},0.08)`,border:`1px solid rgba(${s.rgb},0.2)` }}>
                      <div style={{ fontSize:20,marginBottom:4 }}>{s.icon}</div>
                      <div style={{ fontFamily:"'Space Grotesk', sans-serif",fontSize:22,fontWeight:700,color:s.color }}>{s.value}</div>
                      <div style={{ fontSize:11,color:"#6b7280",marginTop:2 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {publishing && (
                  <div style={{ marginBottom:16 }}>
                    <div style={{ display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:13,color:"#9ca3af" }}>
                      <span>Generating 5,000 unique job posts...</span><span>{Math.round(progress)}%</span>
                    </div>
                    <div style={{ height:6,background:"rgba(255,255,255,0.08)",borderRadius:99,overflow:"hidden" }}>
                      <div style={{ height:"100%",borderRadius:99,background:"linear-gradient(90deg, #6366f1, #10b981)",width:`${progress}%`,transition:"width 0.4s ease" }} />
                    </div>
                  </div>
                )}

                {publishResult && (
                  <div style={{ marginBottom:16,padding:"14px 16px",borderRadius:10,background:publishResult.success?"rgba(16,185,129,0.08)":"rgba(239,68,68,0.08)",border:`1px solid ${publishResult.success?"rgba(16,185,129,0.25)":"rgba(239,68,68,0.25)"}`,color:publishResult.success?"#34d399":"#f87171",fontSize:14 }}>
                    {publishResult.success?"✅":"❌"} {publishResult.message}
                    {publishResult.stats && <div style={{ marginTop:6,fontSize:12,color:"#9ca3af" }}>{publishResult.stats.remote.toLocaleString()} remote · {publishResult.stats.normal.toLocaleString()} on-site · with JobPosting schema</div>}
                  </div>
                )}

                <button onClick={publishJobs} disabled={publishing} style={{ width:"100%",padding:"15px",borderRadius:12,border:"none",background:publishing?"rgba(255,255,255,0.05)":"linear-gradient(135deg, #6366f1, #4f46e5)",color:publishing?"#4b5563":"white",fontSize:16,fontWeight:700,cursor:publishing?"not-allowed":"pointer",fontFamily:"'Space Grotesk', sans-serif",boxShadow:publishing?"none":"0 4px 24px rgba(99,102,241,0.3)" }}>
                  {publishing?"⏳ Publishing Jobs...":"🚀 Publish 5,000 Jobs"}
                </button>
                <p style={{ textAlign:"center",fontSize:12,color:"#4b5563",marginTop:10,marginBottom:0 }}>JSON-LD JobPosting schema · ValidThrough = 12 months from today</p>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom:28 }}>
                <h1 style={{ fontFamily:"'Space Grotesk', sans-serif",fontSize:26,fontWeight:700,margin:"0 0 4px" }}>Publish History</h1>
                <p style={{ color:"#6b7280",fontSize:14,margin:0 }}>Record of all job publishing sessions.</p>
              </div>
              {logs.length===0 ? (
                <div style={{ textAlign:"center",padding:"60px 24px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,color:"#4b5563" }}>
                  <div style={{ fontSize:40,marginBottom:12 }}>📭</div>
                  <div style={{ fontSize:16,fontWeight:500 }}>No publish sessions yet</div>
                </div>
              ) : logs.map((log,i)=>(
                <div key={i} style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"20px 24px",display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:16,marginBottom:12 }}>
                  <div>
                    <div style={{ fontWeight:600,fontSize:16,marginBottom:4 }}>{COUNTRIES.find(c=>c.code===log.countryCode)?.flag} {log.country}</div>
                    <div style={{ fontSize:12,color:"#6b7280" }}>{new Date(log.publishedAt).toLocaleString()}</div>
                  </div>
                  <div style={{ display:"flex",gap:16,fontSize:13 }}>
                    {[{val:log.totalJobs,label:"Total",color:"#6366f1"},{val:log.remoteJobs,label:"Remote",color:"#10b981"},{val:log.normalJobs,label:"On-site",color:"#f59e0b"}].map(s=>(
                      <div key={s.label} style={{ textAlign:"center" }}>
                        <div style={{ fontWeight:700,color:s.color,fontSize:18 }}>{s.val.toLocaleString()}</div>
                        <div style={{ color:"#6b7280" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
