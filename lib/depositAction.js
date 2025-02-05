"use server";

import Asset from "@/models/Assets";
import { connectToDB } from "./connectDB";

export async function fetchAssets() {
  try {
    await connectToDB();
    const assets = await Asset.find({}, "name depositAddress").lean(); // Fetch only name & address
    console.log("Assets from Server:", assets);
    return assets;
  } catch (error) {
    console.error("Error fetching assets:", error);
    return [];
  }
}
