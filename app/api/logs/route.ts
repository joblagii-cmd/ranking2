import { NextResponse } from "next/server";
import { getPublishLogs } from "@/lib/store";

export async function GET() {
  const logs = getPublishLogs();
  return NextResponse.json(logs);
}
