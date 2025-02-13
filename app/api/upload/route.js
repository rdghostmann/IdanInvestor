import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { connectToDB } from "@/lib/connectDB";
import Deposit from "@/models/Deposit";
import { getUserFromSession } from "@/lib/actions";
import { revalidatePath } from "next/cache";

export async function POST(req) {

  const user = await getUserFromSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const userId = user.id;
    const asset = formData.get("asset");
    const amount = formData.get("amount");

    console.log("Received formData:", { file, userId, asset, amount });


    if (!file || !asset || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Extract file name safely
    const fileName = file.name || `deposit_${Date.now()}.jpg`;

    // Upload file
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const blob = await put(`deposits/${fileName}`, fileBuffer, { access: "public" });

    console.log("File uploaded:", blob.url);

    await connectToDB();
    // Save new deposit in the database
    const deposit = await Deposit.create({
      userId,
      asset,
      amount,
      proofOfDeposit: blob.url,
      status: "pending",
    });

    // Revalidate Deposit page
    revalidatePath("/dashboard");

    return NextResponse.json({ message: "Deposit recorded successfully!", deposit }, { status: 201 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload deposit proof" }, { status: 500 });
  }
}
