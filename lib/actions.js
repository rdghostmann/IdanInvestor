"use server";

import User from "@/models/User";
import { getServerSession } from "next-auth";
import { connectToDB } from "./connectDB";
import { authOptions } from "@/auth";
import Investment from "@/models/Investment";

export async function getUserFromSession() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) return null;

  try {
    await connectToDB();
    const user = await User.findOne({ email: session.user.email });

    return user
      ? { id: user._id.toString(), email: user.email, name: user.name }
      : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}


export async function getUserBalance(email) {
  try {
    await connectToDB();
    const user = await User.findOne({ email }, "walletBalance");
    return { balance: user?.walletBalance || 0 };
  } catch (error) {
    console.error("Error fetching balance:", error);
    return { balance: 0 };
  }
}

export async function investAmount({ investId, planName, amount, profit }) {
  try {
    await connectToDB();

    // Find the user
    const user = await User.findById(investId);
    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Check if the user has enough balance
    if (user.walletBalance < amount) {
      return { success: false, message: "Insufficient balance" };
    }

    // Deduct amount from wallet balance
    user.walletBalance -= amount;
    await user.save();

    const investment = new Investment({
      investId,
      planName,
      amount,
      profit,
    });

    await investment.save();

    return { success: true, message: "Investment successful" };
  } catch (error) {
    console.error("Error creating investment:", error);
    return { success: false, message: "Investment failed" };
  }
}
