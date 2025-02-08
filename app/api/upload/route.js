import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { connectToDB } from "@/lib/connectDB";
import Deposit from "@/models/Deposit";
import { fetchUser } from "@/lib/depositAction"; // Correct import
import { getServerSession } from "next-auth"; // For session handling
import { authOptions } from "@/lib/auth";


export async function POST(req) {
  try {
    // Ensure DB connection
    await connectToDB();


    const formData = await req.formData();
    // console.log("Received Form Data:", [...formData.entries()]);

    // Extract file and other data
    const file = formData.get("file");
    const assetId = formData.get("assetId")?.trim();
    const amount = Number(formData.get("amount"));

    // Get session data to retrieve email
    const session = await getServerSession(authOptions);
    const email = session?.user?.email || formData.get("email")?.trim(); // Check if email is passed via session or form

    // Make sure email is present
    if (!email || email === "undefined") {
      return NextResponse.json({ error: "User email is required" }, { status: 400 });
    }

    // Fetch user by email
    const user = await fetchUser(email);
    // console.log("User Fetched on upload/route",user);

    // Handle invalid user
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Validate other fields
    if (!assetId || isNaN(amount)) {
      return NextResponse.json({ error: "Missing or invalid required fields" }, { status: 400 });
    }

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    // Validate file size and type
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Max 5MB allowed." }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type. Only JPG, PNG are allowed." }, { status: 400 });
    }

    // Convert file to buffer and upload to Vercel Blob Storage
    const fileArrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(fileArrayBuffer);

    let blob;
    try {
      blob = await put(`deposits/${file.name}`, fileBuffer, { access: "public" });
      // console.log("Upload Success:", blob);
    } catch (uploadError) {
      console.error("File Upload Error:", uploadError);
      return NextResponse.json({ error: "File upload failed" }, { status: 500 });
    }

    // Check if blob URL is returned successfully
    const uploadUrl = blob?.url;
    if (!uploadUrl) {
      return NextResponse.json({ error: "File upload failed" }, { status: 500 });
    }

    // Save deposit in the database
    const deposit = await Deposit.create({
      userId: user._id,
      asset: assetId,
      amount,
      proofOfDeposit: uploadUrl,
      status: "pending",
    });

    console.log("Deposit saved:", deposit);

    // Revalidate Deposit page
    revalidatePath("/dashboard");

    return NextResponse.json({ message: "Deposit recorded successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Deposit Upload Error:", error);
    return NextResponse.json({ error: "Failed to upload deposit proof" }, { status: 500 });
  }
}
