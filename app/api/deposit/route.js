import { connectToDB } from "@/lib/connectDB";
import Transaction from "@/models/Transaction";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const { userId, amount, asset, proofImage } = await req.json();

    const transaction = await Transaction.create({
      user: userId,
      amount,
      asset,
      type: "deposit",
      status: "pending",
      proofImage,
    });

    return NextResponse.json({ message: "Deposit request submitted", transaction }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
