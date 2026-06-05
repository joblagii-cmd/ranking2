import { NextRequest, NextResponse } from "next/server";
import { getCompanies, saveCompanies } from "@/lib/store";

export async function GET() {
  const companies = getCompanies();
  return NextResponse.json(companies);
}

export async function POST(req: NextRequest) {
  const { countryCode, company } = await req.json();
  if (!countryCode || !company) {
    return NextResponse.json({ error: "Missing countryCode or company" }, { status: 400 });
  }
  const companies = getCompanies();
  if (!companies[countryCode]) companies[countryCode] = [];
  if (!companies[countryCode].includes(company)) {
    companies[countryCode].push(company);
    saveCompanies(companies);
  }
  return NextResponse.json({ success: true, companies: companies[countryCode] });
}

export async function DELETE(req: NextRequest) {
  const { countryCode, company } = await req.json();
  const companies = getCompanies();
  if (companies[countryCode]) {
    companies[countryCode] = companies[countryCode].filter((c: string) => c !== company);
    saveCompanies(companies);
  }
  return NextResponse.json({ success: true });
}
