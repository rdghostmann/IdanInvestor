import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

  const blob = await put(`uploads/${file.name}`, file, { access: "public" });

  return NextResponse.json({ url: blob.url }, { status: 200 });
}
