import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

export function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Companies store: { [countryCode]: string[] }
export function getCompanies(): Record<string, string[]> {
  const file = path.join(DATA_DIR, "companies.json");
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

export function saveCompanies(data: Record<string, string[]>) {
  ensureDataDir();
  fs.writeFileSync(path.join(DATA_DIR, "companies.json"), JSON.stringify(data, null, 2));
}

// Jobs store: saved per country as jobs-{countryCode}.json
export function getJobsForCountry(countryCode: string) {
  const file = path.join(DATA_DIR, `jobs-${countryCode}.json`);
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

export function saveJobsForCountry(countryCode: string, jobs: unknown[]) {
  ensureDataDir();
  fs.writeFileSync(
    path.join(DATA_DIR, `jobs-${countryCode}.json`),
    JSON.stringify(jobs, null, 2)
  );
}

// Publish log
export interface PublishLog {
  countryCode: string;
  country: string;
  publishedAt: string;
  totalJobs: number;
  remoteJobs: number;
  normalJobs: number;
}

export function getPublishLogs(): PublishLog[] {
  const file = path.join(DATA_DIR, "publish-log.json");
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

export function appendPublishLog(log: PublishLog) {
  ensureDataDir();
  const logs = getPublishLogs();
  logs.unshift(log);
  fs.writeFileSync(path.join(DATA_DIR, "publish-log.json"), JSON.stringify(logs.slice(0, 100), null, 2));
}
