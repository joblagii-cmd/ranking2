"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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

const ADMIN_PASSWORD = "Amituwit92";
const STORAGE_KEY = "jobportal_companies";
const LOGS_KEY = "jobportal_logs";
const AUTO_KEY = "jobportal_auto";

interface PublishLog {
  countryCode: string; country: string; publishedAt: string;
  totalJobs: number; remoteJobs: number; normalJobs: number; auto?: boolean;
}
interface AutoState {
  running: boolean;
  queue: string[];       // country codes remaining
  currentIndex: number;  // which country is being published now
  startedAt: string;
  lastPublishedAt: string | null;
  nextAt: string | null;
}

function loadCompanies(): Record<string, string[]> {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; }
}
function saveCompanies(data: Record<string, string[]>) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function loadLogs(): PublishLog[] {
  try { return JSON.parse(localStorage.getItem(LOGS_KEY) || "[]"); } catch { return []; }
}
function saveLogs(logs: PublishLog[]) { localStorage.setItem(LOGS_KEY, JSON.stringify(logs.slice(0, 200))); }
function loadAutoState(): AutoState | null {
  try { const s = localStorage.getItem(AUTO_KEY); return s ? JSON.parse(s) : null; } catch { return null; }
}
function saveAutoState(s: AutoState | null) {
  if (s) localStorage.setItem(AUTO_KEY, JSON.stringify(s));
  else localStorage.removeItem(AUTO_KEY);
}

const INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [companies, setCompanies] = useState<Record<string, string[]>>({});
  const [newCompany, setNewCompany] = useState("");
  const [addMode, setAddMode] = useState<"selected" | "all">("selected");
  const [bulkText, setBulkText] = useState("");
  const [showBulk, setShowBulk] = useState(false);
  const [logs, setLogs] = useState<PublishLog[]>([]);
  const [activeTab, setActiveTab] = useState<"manage" | "auto" | "logs">("manage");
  const [publishing, setPublishing] = useState(false);
  const [publishResult, setPublishResult] = useState<{ success?: boolean; message?: string; stats?: { total: number; remote: number; normal: number } } | null>(null);
  const [progress, setProgress] = useState(0);
  const [countryDropOpen, setCountryDropOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [autoState, setAutoState] = useState<AutoState | null>(null);
  const [autoStatus, setAutoStatus] = useState("");
  const [countdown, setCountdown] = useState("");
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Load from localStorage on login
  useEffect(() => {
    if (authed) {
      setCompanies(loadCompanies());
      setLogs(loadLogs());
      const saved = loadAutoState();
      if (saved?.running) {
        setAutoState(saved);
        scheduleNext(saved);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  // Countdown ticker
  useEffect(() => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    if (!autoState?.running || !autoState.nextAt) return;
    countdownRef.current = setInterval(() => {
      const diff = new Date(autoState.nextAt!).getTime() - Date.now();
      if (diff <= 0) { setCountdown("Publishing now..."); return; }
      const m = Math.floor(diff / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setCountdown(`${m}m ${s}s`);
    }, 1000);
    return () => { if (countdownRef.current) clearInterval(countdownRef.current); };
  }, [autoState]);

  const publishOne = useCallback(async (code: string): Promise<boolean> => {
    const allCompanies = loadCompanies();
    const co = allCompanies[code] || [];
    // fallback: use any country's companies if this one is empty
    const fallback = Object.values(allCompanies).find(arr => arr.length > 0) || [];
    const companiesToUse = co.length > 0 ? co : fallback;
    if (companiesToUse.length === 0) return false;
    try {
      const res = await fetch("/api/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ countryCode: code, companies: companiesToUse }),
      });
      const data = await res.json();
      if (data.success) {
        const country = COUNTRIES.find(c => c.code === code);
        const newLog: PublishLog = {
          countryCode: code, country: country?.name || code,
          publishedAt: new Date().toISOString(),
          totalJobs: data.total, remoteJobs: data.remote, normalJobs: data.normal, auto: true,
        };
        const updated = [newLog, ...loadLogs()].slice(0, 200);
        saveLogs(updated);
        setLogs(updated);
        return true;
      }
    } catch { /* ignore */ }
    return false;
  }, []);

  const scheduleNext = useCallback((state: AutoState) => {
    if (!state.running || state.queue.length === 0) {
      // Queue finished — stop auto
      const stopped = { ...state, running: false, nextAt: null };
      saveAutoState(stopped);
      setAutoState(stopped);
      setAutoStatus("✅ All countries published! Auto Post stopped.");
      return;
    }

    const nextCode = state.queue[0];
    const nextCountry = COUNTRIES.find(c => c.code === nextCode);
    const now = Date.now();
    const delayMs = state.lastPublishedAt
      ? Math.max(0, new Date(state.lastPublishedAt).getTime() + INTERVAL_MS - now)
      : 0;
    const nextAt = new Date(now + delayMs).toISOString();
    const updated = { ...state, nextAt };
    saveAutoState(updated);
    setAutoState(updated);
    setAutoStatus(`⏳ Next: ${nextCountry?.flag} ${nextCountry?.name} in ${Math.round(delayMs / 1000)}s`);

    if (autoRef.current) clearTimeout(autoRef.current);
    autoRef.current = setTimeout(async () => {
      setAutoStatus(`🚀 Publishing ${nextCountry?.flag} ${nextCountry?.name}...`);
      const ok = await publishOne(nextCode);
      const newQueue = state.queue.slice(1);
      const newState: AutoState = {
        running: newQueue.length > 0,
        queue: newQueue,
        currentIndex: state.currentIndex + 1,
        startedAt: state.startedAt,
        lastPublishedAt: new Date().toISOString(),
        nextAt: null,
      };
      if (newQueue.length > 0) {
        setAutoStatus(ok
          ? `✅ ${nextCountry?.name} done! ${newQueue.length} countries left.`
          : `⚠️ ${nextCountry?.name} failed (no companies). Skipping...`
        );
        scheduleNext(newState);
      } else {
        saveAutoState({ ...newState, running: false });
        setAutoState({ ...newState, running: false });
        setAutoStatus("🎉 All countries published! Auto Post complete.");
      }
    }, delayMs);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publishOne]);

  const startAutoPost = useCallback(() => {
    if (autoRef.current) clearTimeout(autoRef.current);
    const allCompanies = loadCompanies();
    const hasAny = Object.values(allCompanies).some(arr => arr.length > 0);
    if (!hasAny) { setAutoStatus("❌ Please add companies to at least one country first."); return; }
    // Build queue: all countries that have companies OR at least one company exists as fallback
    const queue = COUNTRIES.map(c => c.code);
    const state: AutoState = {
      running: true,
      queue,
      currentIndex: 0,
      startedAt: new Date().toISOString(),
      lastPublishedAt: null,
      nextAt: null,
    };
    saveAutoState(state);
    setAutoState(state);
    setAutoStatus("🚀 Auto Post started! First country publishing now...");
    scheduleNext(state);
  }, [scheduleNext]);

  const stopAutoPost = useCallback(() => {
    if (autoRef.current) clearTimeout(autoRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
    saveAutoState(null);
    setAutoState(null);
    setAutoStatus("🛑 Auto Post stopped.");
  }, []);

  const countryCompanies = companies[selectedCountry] || [];
  const selectedC = COUNTRIES.find(c => c.code === selectedCountry);

  const handleLogin = () => {
    if (pwInput === ADMIN_PASSWORD) { setAuthed(true); setPwError(false); }
    else { setPwError(true); setPwInput(""); }
  };

  // Add company to selected or all countries
  const addCompany = useCallback(() => {
    const trimmed = newCompany.trim(); if (!trimmed) return;
    const data = loadCompanies();
    if (addMode === "selected") {
      if (!data[selectedCountry]) data[selectedCountry] = [];
      if (!data[selectedCountry].includes(trimmed)) data[selectedCountry].push(trimmed);
    } else {
      // Add to ALL countries, skip duplicates
      COUNTRIES.forEach(c => {
        if (!data[c.code]) data[c.code] = [];
        if (!data[c.code].includes(trimmed)) data[c.code].push(trimmed);
      });
    }
    saveCompanies(data); setCompanies({ ...data }); setNewCompany("");
  }, [newCompany, selectedCountry, addMode]);

  // Bulk add
  const addBulkCompanies = useCallback(() => {
    const lines = bulkText.split("\n").map(l => l.trim()).filter(Boolean);
    if (!lines.length) return;
    const data = loadCompanies();
    if (addMode === "selected") {
      if (!data[selectedCountry]) data[selectedCountry] = [];
      lines.forEach(c => { if (!data[selectedCountry].includes(c)) data[selectedCountry].push(c); });
    } else {
      COUNTRIES.forEach(country => {
        if (!data[country.code]) data[country.code] = [];
        lines.forEach(c => { if (!data[country.code].includes(c)) data[country.code].push(c); });
      });
    }
    saveCompanies(data); setCompanies({ ...data }); setBulkText(""); setShowBulk(false);
  }, [bulkText, selectedCountry, addMode]);

  const removeCompany = useCallback((company: string) => {
    const data = loadCompanies();
    if (data[selectedCountry]) {
      data[selectedCountry] = data[selectedCountry].filter(c => c !== company);
      saveCompanies(data); setCompanies({ ...data });
    }
  }, [selectedCountry]);

  const publishJobs = async () => {
    if (countryCompanies.length === 0) { setPublishResult({ success: false, message: "Please add at least one company first." }); return; }
    setPublishing(true); setPublishResult(null); setProgress(0);
    const interval = setInterval(() => setProgress(p => Math.min(p + Math.random() * 5, 88)), 600);
    try {
      const res = await fetch("/api/publish", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ countryCode: selectedCountry, companies: countryCompanies }),
      });
      const data = await res.json();
      clearInterval(interval); setProgress(100);
      if (data.success) {
        const newLog: PublishLog = { countryCode: selectedCountry, country: data.country, publishedAt: new Date().toISOString(), totalJobs: data.total, remoteJobs: data.remote, normalJobs: data.normal };
        const updated = [newLog, ...loadLogs()].slice(0, 200);
        saveLogs(updated); setLogs(updated);
        setPublishResult({ success: true, message: `${data.total.toLocaleString()} jobs published for ${data.country}!`, stats: { total: data.total, remote: data.remote, normal: data.normal } });
      } else {
        setPublishResult({ success: false, message: data.error || "Publishing failed." });
      }
    } catch {
      clearInterval(interval);
      setPublishResult({ success: false, message: "Network error. Please try again." });
    } finally {
      setPublishing(false); setTimeout(() => setProgress(0), 3000);
    }
  };

  // ---------- Searchable Country Dropdown component ----------
  const CountryDropdown = () => (
    <div style={{ position: "relative", maxWidth: 340 }}>
      <div onClick={() => { setCountryDropOpen(o => !o); setCountrySearch(""); setPublishResult(null); }}
        style={{ width: "100%", padding: "12px 40px 12px 16px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, color: "#e8e8f0", fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, position: "relative", userSelect: "none", boxSizing: "border-box" }}>
        <span style={{ fontSize: 20 }}>{selectedC?.flag}</span>
        <span style={{ flex: 1 }}>{selectedC?.name}</span>
        <span style={{ position: "absolute", right: 14, color: "#6b7280", fontSize: 12, transition: "transform 0.2s", transform: countryDropOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
      </div>
      {countryDropOpen && (
        <>
          <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 1000, background: "#13131f", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.6)", overflow: "hidden" }}>
            <div style={{ padding: "10px 10px 8px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "7px 10px" }}>
                <span style={{ color: "#6b7280", fontSize: 13 }}>🔍</span>
                <input autoFocus value={countrySearch} onChange={e => setCountrySearch(e.target.value)} placeholder="Search country..."
                  style={{ flex: 1, background: "transparent", border: "none", color: "#e8e8f0", fontSize: 13, outline: "none", fontFamily: "'DM Sans', sans-serif" }} />
                {countrySearch && <span onClick={() => setCountrySearch("")} style={{ color: "#6b7280", cursor: "pointer", fontSize: 13 }}>✕</span>}
              </div>
            </div>
            <div style={{ maxHeight: 280, overflowY: "auto" }}>
              {COUNTRIES.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.code.toLowerCase().includes(countrySearch.toLowerCase())).map(c => (
                <div key={c.code} onClick={() => { setSelectedCountry(c.code); setCountryDropOpen(false); setCountrySearch(""); setPublishResult(null); }}
                  style={{ padding: "9px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontSize: 13, background: selectedCountry === c.code ? "rgba(99,102,241,0.18)" : "transparent", color: selectedCountry === c.code ? "#a5b4fc" : "#e8e8f0", borderLeft: selectedCountry === c.code ? "2px solid #6366f1" : "2px solid transparent", transition: "background 0.12s" }}
                  onMouseEnter={e => { if (selectedCountry !== c.code) (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; }}
                  onMouseLeave={e => { if (selectedCountry !== c.code) (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}>
                  <span style={{ fontSize: 18 }}>{c.flag}</span>
                  <span style={{ flex: 1 }}>{c.name}</span>
                  <span style={{ fontSize: 11, color: "#4b5563" }}>{c.code}</span>
                  {selectedCountry === c.code && <span style={{ fontSize: 12, color: "#6366f1" }}>✓</span>}
                </div>
              ))}
            </div>
            <div style={{ padding: "6px 14px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: 11, color: "#4b5563" }}>
              {COUNTRIES.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.code.toLowerCase().includes(countrySearch.toLowerCase())).length} of {COUNTRIES.length} countries
            </div>
          </div>
          <div style={{ position: "fixed", inset: 0, zIndex: 999 }} onClick={() => { setCountryDropOpen(false); setCountrySearch(""); }} />
        </>
      )}
    </div>
  );

  // ---------- Login screen ----------
  if (!authed) return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(99,102,241,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "48px 40px", width: "100%", maxWidth: 380, textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, margin: "0 auto 20px", background: "linear-gradient(135deg, #6366f1, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>🔐</div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: "#e8e8f0", margin: "0 0 6px" }}>Admin Access</h1>
        <p style={{ color: "#4b5563", fontSize: 13, margin: "0 0 28px" }}>Enter password to continue</p>
        <input type="password" value={pwInput} onChange={e => { setPwInput(e.target.value); setPwError(false); }} onKeyDown={e => e.key === "Enter" && handleLogin()} placeholder="Password" autoFocus
          style={{ width: "100%", padding: "13px 16px", borderRadius: 10, background: "rgba(255,255,255,0.05)", border: `1px solid ${pwError ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`, color: "#e8e8f0", fontSize: 15, outline: "none", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box", marginBottom: 8 }} />
        {pwError && <p style={{ color: "#f87171", fontSize: 13, margin: "0 0 12px", textAlign: "left" }}>❌ Wrong password. Try again.</p>}
        <button onClick={handleLogin} style={{ width: "100%", padding: "13px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #6366f1, #4f46e5)", color: "white", fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 8, boxShadow: "0 4px 20px rgba(99,102,241,0.3)" }}>Login →</button>
      </div>
    </div>
  );

  // ---------- Main dashboard ----------
  const totalCompanies = Object.values(companies).reduce((a, b) => a + b.length, 0);
  const countriesWithCompanies = Object.values(companies).filter(a => a.length > 0).length;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e8e8f0", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <header style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(10px)", background: "rgba(10,10,15,0.8)", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #6366f1, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>💼</div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 17 }}>JobPortal Admin</div>
              <div style={{ fontSize: 11, color: "#6b7280" }}>{countriesWithCompanies} countries · {totalCompanies} companies</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {autoState?.running && (
              <div style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", color: "#34d399", fontSize: 12, fontWeight: 600 }}>
                🤖 AUTO ON · {autoState.queue.length} left
              </div>
            )}
            {[{ key: "manage", label: "⚙️ Manage" }, { key: "auto", label: "🤖 Auto Post" }, { key: "logs", label: "📋 Logs" }].map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key as "manage" | "auto" | "logs")} style={{ padding: "7px 16px", borderRadius: 8, border: "1px solid", borderColor: activeTab === tab.key ? "#6366f1" : "rgba(255,255,255,0.1)", background: activeTab === tab.key ? "rgba(99,102,241,0.15)" : "transparent", color: activeTab === tab.key ? "#a5b4fc" : "#9ca3af", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
                {tab.label}
              </button>
            ))}
            <button onClick={() => setAuthed(false)} style={{ padding: "7px 14px", borderRadius: 8, border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.08)", color: "#f87171", fontSize: 13, cursor: "pointer" }}>Logout</button>
          </div>
        </header>

        <main style={{ maxWidth: 980, margin: "0 auto", padding: "36px 24px" }}>

          {/* ===== MANAGE TAB ===== */}
          {activeTab === "manage" && (
            <div>
              <div style={{ marginBottom: 28 }}>
                <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, margin: "0 0 4px" }}>Job Publishing Control</h1>
                <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>Select country → Add companies → Publish 5,000 jobs</p>
              </div>

              <div style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: "14px 18px", marginBottom: 20, fontSize: 13, color: "#fbbf24" }}>
                ⚙️ <strong>Setup:</strong> Add <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 6px", borderRadius: 4 }}>GITHUB_TOKEN</code>, <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 6px", borderRadius: 4 }}>GITHUB_OWNER</code>, <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 6px", borderRadius: 4 }}>GITHUB_REPO</code> in Vercel env vars.
              </div>

              {/* Step 1 — Country */}
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Step 1 — Select Country</label>
                <CountryDropdown />
              </div>

              {/* Step 2 — Companies */}
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#10b981", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
                  Step 2 — Add Companies
                </label>

                {/* Add mode toggle */}
                <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                  {(["selected", "all"] as const).map(mode => (
                    <button key={mode} onClick={() => setAddMode(mode)}
                      style={{ padding: "8px 16px", borderRadius: 9, border: "1px solid", borderColor: addMode === mode ? "#10b981" : "rgba(255,255,255,0.1)", background: addMode === mode ? "rgba(16,185,129,0.12)" : "transparent", color: addMode === mode ? "#34d399" : "#9ca3af", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                      {mode === "selected" ? `🏳️ ${selectedC?.flag} ${selectedC?.name} only` : "🌍 All Countries"}
                    </button>
                  ))}
                </div>

                {addMode === "all" && (
                  <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)", fontSize: 13, color: "#6ee7b7", marginBottom: 12 }}>
                    ✅ Companies will be added to all <strong>{COUNTRIES.length} countries</strong>. Duplicates will be skipped automatically.
                  </div>
                )}

                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <input type="text" value={newCompany} onChange={e => setNewCompany(e.target.value)} onKeyDown={e => e.key === "Enter" && addCompany()} placeholder="Company name..."
                    style={{ flex: 1, padding: "11px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, color: "#e8e8f0", fontSize: 14, outline: "none", fontFamily: "'DM Sans', sans-serif" }} />
                  <button onClick={addCompany} style={{ padding: "11px 20px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #10b981, #059669)", color: "white", fontWeight: 600, fontSize: 14, cursor: "pointer", whiteSpace: "nowrap" }}>
                    + Add {addMode === "all" ? "to All" : ""}
                  </button>
                  <button onClick={() => setShowBulk(!showBulk)} style={{ padding: "11px 16px", borderRadius: 10, border: "1px solid rgba(99,102,241,0.3)", background: showBulk ? "rgba(99,102,241,0.15)" : "transparent", color: "#a5b4fc", fontWeight: 600, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
                    📋 Bulk
                  </button>
                </div>

                {showBulk && (
                  <div style={{ marginBottom: 16, padding: 16, background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 12 }}>
                    <p style={{ fontSize: 12, color: "#a5b4fc", margin: "0 0 10px" }}>
                      📌 1 company per line — will add to <strong>{addMode === "all" ? "ALL countries" : selectedC?.name}</strong>
                    </p>
                    <textarea value={bulkText} onChange={e => setBulkText(e.target.value)} placeholder={"Google\nMicrosoft\nAmazon\nApple\nMeta"} rows={6}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#e8e8f0", fontSize: 14, outline: "none", resize: "vertical", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} />
                    <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                      <button onClick={addBulkCompanies} style={{ padding: "9px 20px", borderRadius: 9, border: "none", background: "linear-gradient(135deg, #6366f1, #4f46e5)", color: "white", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
                        ✅ Add {bulkText.split("\n").filter(l => l.trim()).length} Companies{addMode === "all" ? " to All Countries" : ""}
                      </button>
                      <button onClick={() => { setShowBulk(false); setBulkText(""); }} style={{ padding: "9px 16px", borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#9ca3af", fontSize: 13, cursor: "pointer" }}>Cancel</button>
                    </div>
                  </div>
                )}

                <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 10 }}>
                  {countryCompanies.length === 0 ? `No companies for ${selectedC?.name} yet.` : `${countryCompanies.length} companies for ${selectedC?.flag} ${selectedC?.name}:`}
                </div>
                {countryCompanies.length > 0 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8, maxHeight: 240, overflowY: "auto" }}>
                    {countryCompanies.map(c => (
                      <div key={c} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <span style={{ fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>🏢 {c}</span>
                        <button onClick={() => removeCompany(c)} style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: 16, padding: "0 0 0 8px", flexShrink: 0 }}>×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Step 3 — Publish */}
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>Step 3 — Publish Jobs for {selectedC?.flag} {selectedC?.name}</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
                  {[{ label: "Total Jobs", value: "5,000", icon: "📊", color: "#6366f1", rgb: "99,102,241" }, { label: "Remote", value: "2,500", icon: "🏠", color: "#10b981", rgb: "16,185,129" }, { label: "On-site", value: "2,500", icon: "🏢", color: "#f59e0b", rgb: "245,158,11" }].map(s => (
                    <div key={s.label} style={{ padding: "16px", borderRadius: 10, textAlign: "center", background: `rgba(${s.rgb},0.08)`, border: `1px solid rgba(${s.rgb},0.2)` }}>
                      <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
                      <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                {publishing && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: "#9ca3af" }}>
                      <span>⚡ Saving jobs to GitHub...</span><span>{Math.round(progress)}%</span>
                    </div>
                    <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden" }}>
                      <div style={{ height: "100%", borderRadius: 99, background: "linear-gradient(90deg, #6366f1, #10b981)", width: `${progress}%`, transition: "width 0.5s ease" }} />
                    </div>
                  </div>
                )}
                {publishResult && (
                  <div style={{ marginBottom: 16, padding: "14px 16px", borderRadius: 10, background: publishResult.success ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)", border: `1px solid ${publishResult.success ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`, color: publishResult.success ? "#34d399" : "#f87171", fontSize: 14 }}>
                    {publishResult.success ? "✅" : "❌"} {publishResult.message}
                    {publishResult.stats && <div style={{ marginTop: 6, fontSize: 12, color: "#9ca3af" }}>{publishResult.stats.remote.toLocaleString()} remote · {publishResult.stats.normal.toLocaleString()} on-site</div>}
                  </div>
                )}
                <button onClick={publishJobs} disabled={publishing} style={{ width: "100%", padding: "15px", borderRadius: 12, border: "none", background: publishing ? "rgba(255,255,255,0.05)" : "linear-gradient(135deg, #6366f1, #4f46e5)", color: publishing ? "#4b5563" : "white", fontSize: 16, fontWeight: 700, cursor: publishing ? "not-allowed" : "pointer", fontFamily: "'Space Grotesk', sans-serif", boxShadow: publishing ? "none" : "0 4px 24px rgba(99,102,241,0.3)" }}>
                  {publishing ? "⏳ Publishing..." : "🚀 Publish 5,000 Jobs Live"}
                </button>
              </div>
            </div>
          )}

          {/* ===== AUTO POST TAB ===== */}
          {activeTab === "auto" && (
            <div>
              <div style={{ marginBottom: 28 }}>
                <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, margin: "0 0 4px" }}>🤖 Auto Post</h1>
                <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>Automatically publish 5,000 jobs for every country — one by one, 10 minutes apart</p>
              </div>

              {/* How it works */}
              <div style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 14, padding: 20, marginBottom: 20 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#a5b4fc", marginBottom: 10 }}>How Auto Post works:</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                  {[
                    { icon: "🌍", label: `${COUNTRIES.length} Countries`, desc: "All countries in queue" },
                    { icon: "📦", label: "5,000 Jobs each", desc: "Per country publish" },
                    { icon: "⏱️", label: "10 min gap", desc: "Between each country" },
                  ].map(i => (
                    <div key={i.label} style={{ padding: "14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                      <div style={{ fontSize: 24, marginBottom: 6 }}>{i.icon}</div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: "#e8e8f0" }}>{i.label}</div>
                      <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{i.desc}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 12, fontSize: 12, color: "#6b7280" }}>
                  Total time: ~{Math.round(COUNTRIES.length * 10 / 60)}h {(COUNTRIES.length * 10) % 60}min to publish all {COUNTRIES.length} countries · Total jobs: ~{(COUNTRIES.length * 5000).toLocaleString()}
                </div>
              </div>

              {/* Status card */}
              {autoState?.running ? (
                <div style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 16, padding: 24, marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981", animation: "pulse 1.5s infinite" }} />
                    <span style={{ fontWeight: 700, fontSize: 16, color: "#34d399" }}>Auto Post Running</span>
                  </div>

                  {/* Progress bar */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6b7280", marginBottom: 6 }}>
                      <span>{autoState.currentIndex} of {COUNTRIES.length} countries published</span>
                      <span>{Math.round(autoState.currentIndex / COUNTRIES.length * 100)}%</span>
                    </div>
                    <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 99, overflow: "hidden" }}>
                      <div style={{ height: "100%", borderRadius: 99, background: "linear-gradient(90deg, #10b981, #6366f1)", width: `${autoState.currentIndex / COUNTRIES.length * 100}%`, transition: "width 0.5s" }} />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 16 }}>
                    <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.03)", textAlign: "center" }}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "#34d399" }}>{autoState.currentIndex}</div>
                      <div style={{ fontSize: 11, color: "#6b7280" }}>Published</div>
                    </div>
                    <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.03)", textAlign: "center" }}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "#a5b4fc" }}>{autoState.queue.length}</div>
                      <div style={{ fontSize: 11, color: "#6b7280" }}>Remaining</div>
                    </div>
                    <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.03)", textAlign: "center" }}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "#fbbf24" }}>{countdown || "–"}</div>
                      <div style={{ fontSize: 11, color: "#6b7280" }}>Next in</div>
                    </div>
                  </div>

                  {autoStatus && (
                    <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.04)", fontSize: 13, color: "#9ca3af", marginBottom: 16 }}>
                      {autoStatus}
                    </div>
                  )}

                  {/* Upcoming queue */}
                  {autoState.queue.length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 8 }}>Next up:</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {autoState.queue.slice(0, 12).map((code, i) => {
                          const c = COUNTRIES.find(x => x.code === code);
                          return (
                            <span key={code} style={{ padding: "4px 10px", borderRadius: 99, fontSize: 12, background: i === 0 ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.04)", border: i === 0 ? "1px solid rgba(99,102,241,0.4)" : "1px solid rgba(255,255,255,0.07)", color: i === 0 ? "#a5b4fc" : "#6b7280" }}>
                              {c?.flag} {c?.name}
                            </span>
                          );
                        })}
                        {autoState.queue.length > 12 && <span style={{ padding: "4px 10px", borderRadius: 99, fontSize: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#6b7280" }}>+{autoState.queue.length - 12} more</span>}
                      </div>
                    </div>
                  )}

                  <button onClick={stopAutoPost} style={{ padding: "13px 24px", borderRadius: 11, border: "1px solid rgba(239,68,68,0.4)", background: "rgba(239,68,68,0.1)", color: "#f87171", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "100%" }}>
                    🛑 Stop Auto Post
                  </button>
                </div>
              ) : (
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, marginBottom: 20 }}>
                  <div style={{ fontSize: 14, color: "#9ca3af", marginBottom: 20, lineHeight: 1.7 }}>
                    <strong style={{ color: "#e8e8f0" }}>Before starting:</strong><br />
                    1. Add companies to at least one country in the <em>Manage</em> tab<br />
                    2. Countries without companies will use companies from other countries as fallback<br />
                    3. Keep this browser tab open — Auto Post runs in-browser<br />
                    4. Each country gets 5,000 jobs with a 10-minute gap between countries
                  </div>

                  {autoStatus && (
                    <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.04)", fontSize: 13, color: "#9ca3af", marginBottom: 16 }}>
                      {autoStatus}
                    </div>
                  )}

                  <button onClick={startAutoPost} style={{ width: "100%", padding: "16px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #10b981, #6366f1)", color: "white", fontSize: 17, fontWeight: 700, cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 4px 28px rgba(16,185,129,0.3)" }}>
                    🤖 Start Auto Post — All {COUNTRIES.length} Countries
                  </button>
                  <p style={{ textAlign: "center", fontSize: 12, color: "#4b5563", margin: "10px 0 0" }}>
                    Will publish {(COUNTRIES.length * 5000).toLocaleString()} total jobs · ~{Math.round(COUNTRIES.length * 10 / 60)}h {(COUNTRIES.length * 10) % 60}min total
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ===== LOGS TAB ===== */}
          {activeTab === "logs" && (
            <div>
              <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, margin: "0 0 24px" }}>Publish History</h1>
              {logs.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, color: "#4b5563" }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
                  <div style={{ fontSize: 16 }}>No publish sessions yet</div>
                </div>
              ) : logs.map((log, i) => {
                const c = COUNTRIES.find(x => x.code === log.countryCode);
                return (
                  <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 16, marginBottom: 10 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                        {c?.flag} {log.country}
                        {log.auto && <span style={{ padding: "2px 8px", borderRadius: 99, fontSize: 11, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "#34d399" }}>🤖 auto</span>}
                      </div>
                      <div style={{ fontSize: 12, color: "#6b7280" }}>{new Date(log.publishedAt).toLocaleString()}</div>
                    </div>
                    <div style={{ display: "flex", gap: 16 }}>
                      {[{ val: log.totalJobs, label: "Total", color: "#6366f1" }, { val: log.remoteJobs, label: "Remote", color: "#10b981" }, { val: log.normalJobs, label: "On-site", color: "#f59e0b" }].map(s => (
                        <div key={s.label} style={{ textAlign: "center" }}>
                          <div style={{ fontWeight: 700, color: s.color, fontSize: 18 }}>{s.val.toLocaleString()}</div>
                          <div style={{ color: "#6b7280", fontSize: 13 }}>{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
