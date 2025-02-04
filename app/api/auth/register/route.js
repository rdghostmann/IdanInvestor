import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
<<<<<<< HEAD
import { connectToDB } from "@/lib/connectDB";
=======
import { connectToDB } from "@/lib/connectDB"
>>>>>>> cf275fc456bc8f1d0b2d2fe64c890a4a7bff456f
import { revalidatePath } from "next/cache";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 401 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    revalidatePath("/dashboard")

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error during user registration:", error); // Log the error
    return NextResponse.json({ message: error.message || "Server error" }, { status: 500 });
  }
}
