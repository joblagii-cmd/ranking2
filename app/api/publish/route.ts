import { NextRequest, NextResponse } from "next/server";
import { generateJobs } from "@/lib/generateJobs";
import { getCompanies, saveJobsForCountry, appendPublishLog } from "@/lib/store";
import { TOP_COUNTRIES } from "@/lib/countries";

export const maxDuration = 60; // Vercel max

export async function POST(req: NextRequest) {
  try {
    const { countryCode } = await req.json();
    if (!countryCode) {
      return NextResponse.json({ error: "Missing countryCode" }, { status: 400 });
    }

    const companies = getCompanies();
    const countryCompanies = companies[countryCode];
    if (!countryCompanies || countryCompanies.length === 0) {
      return NextResponse.json({ error: "No companies added for this country" }, { status: 400 });
    }

    const country = TOP_COUNTRIES.find((c) => c.code === countryCode);
    if (!country) {
      return NextResponse.json({ error: "Invalid country code" }, { status: 400 });
    }

    const TOTAL = 5000;
    const jobs = generateJobs(countryCode, countryCompanies, TOTAL);
    saveJobsForCountry(countryCode, jobs);

    appendPublishLog({
      countryCode,
      country: country.name,
      publishedAt: new Date().toISOString(),
      totalJobs: jobs.length,
      remoteJobs: jobs.filter((j) => j.isRemote).length,
      normalJobs: jobs.filter((j) => !j.isRemote).length,
    });

    return NextResponse.json({
      success: true,
      total: jobs.length,
      remote: jobs.filter((j) => j.isRemote).length,
      normal: jobs.filter((j) => !j.isRemote).length,
      country: country.name,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to generate jobs" }, { status: 500 });
  }
}
