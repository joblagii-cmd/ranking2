import { NextRequest, NextResponse } from "next/server";
import { getJobsForCountry } from "@/lib/store";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const countryCode = searchParams.get("country") || "US";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const type = searchParams.get("type"); // "remote" | "normal" | null

  let jobs = getJobsForCountry(countryCode);

  if (type === "remote") jobs = jobs.filter((j: { isRemote: boolean }) => j.isRemote);
  if (type === "normal") jobs = jobs.filter((j: { isRemote: boolean }) => !j.isRemote);

  const total = jobs.length;
  const start = (page - 1) * limit;
  const paginated = jobs.slice(start, start + limit);

  return NextResponse.json({ jobs: paginated, total, page, limit });
}
