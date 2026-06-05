import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const countryCode = searchParams.get("country") || "US";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const type = searchParams.get("type");
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  if (!owner || !repo) return NextResponse.json({ jobs: [], total: 0 });

  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/main/data/index-${countryCode}.json`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return NextResponse.json({ jobs: [], total: 0, page, limit });

    let jobs = await res.json();
    if (type === "remote") jobs = jobs.filter((j: { isRemote: boolean }) => j.isRemote);
    if (type === "normal") jobs = jobs.filter((j: { isRemote: boolean }) => !j.isRemote);

    const total = jobs.length;
    const start = (page - 1) * limit;
    const paginated = jobs.slice(start, start + limit);
    return NextResponse.json({ jobs: paginated, total, page, limit });
  } catch {
    return NextResponse.json({ jobs: [], total: 0, page, limit });
  }
}
