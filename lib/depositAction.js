"use server";

import Asset from "@/models/Assets";
import { connectToDB } from "./connectDB";
import User from "@/models/User";

export async function fetchAssets() {
  try {
    await connectToDB();
    const assets = await Asset.find({}, "_id name symbol depositAddress").lean(); // Fetch only name & address
    return assets;
  } catch (error) {
    console.error("Error fetching assets:", error);
    return [];
  }
}

export async function fetchUser(email) {
  try {
    if (!email) throw new Error("Email is required");

    await connectToDB();

    // Fetch the user from the database using the session email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
