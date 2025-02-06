import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { connectToDB } from "@/lib/connectDB";
import Transaction from "@/models/Transaction";

export async function POST(req) {

  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const userId = formData.get("userId");
    const assetId = formData.get("assetId");
    const amount = formData.get("amount");

    if (!file || !userId || !assetId || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Upload file
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const blob = await put(`deposits/${file.name}`, fileBuffer, { access: "public" });
    console.log(blob.url);

    await connectToDB();
    // Save transaction in database
    const transaction = await Transaction.create({
      user: userId,
      type: "deposit",
      amount,
      asset: assetId,
      proofImage: blob.url,
      status: "pending",
    });

    // Revalidate Desposit page
    revalidatePath("/dashboard/deposit");

    return NextResponse.json({ message: "Deposit recorded successfully!", transaction }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to upload deposit proof" }, { status: 500 });
  }
}
