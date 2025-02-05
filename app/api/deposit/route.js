import { connectToDB } from "@/lib/connectDB";
import Transaction from "@/models/Transaction";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await connectToDB();
    console.log("DB Connected");

    const { userId, amount, asset, proofImage } = await req.json();
    console.log({ userId, amount, asset, proofImage });

    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(asset)) {
      return NextResponse.json({ error: "Invalid user or asset ID" }, { status: 400 });
    }

    const transaction = await Transaction.create({
      user: userId,
      amount,
      asset,
      type: "deposit",
      status: "pending",
      proofImage,
    });

    console.log("Transaction created:", transaction);

    return NextResponse.json({ message: "Deposit request submitted", transaction }, { status: 201 });
  } catch (error) {
    console.error("Error processing deposit:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
