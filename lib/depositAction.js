"use server";

import { connectToDB } from "@/lib/db";
import Asset from "@/models/Asset";

export async function fetchAssets() {
  try {
    await connectToDB();
    const assets = await Asset.find({}, "name address"); // Fetch name & address
    return assets;
  } catch (error) {
    console.error("Error fetching assets:", error);
    return [];
  }
}

export async function uploadProofToBlob(file) {
  if (!file) return null;

  try {
    const response = await fetch("https://api.vercel.com/v1/blob/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_BLOB_TOKEN}`, 
      },
      body: file,
    });

    if (!response.ok) throw new Error("Upload failed");
    
    const data = await response.json();
    return data.url; // Return the uploaded file URL
  } catch (error) {
    console.error("File upload error:", error);
    return null;
  }
}
