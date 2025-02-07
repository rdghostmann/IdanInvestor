"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UploadDeposit({ userId, assetId, amount, onClose }) {
  const inputFileRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!inputFileRef.current.files[0]) {
      toast.error("Please select a file.");
      return;
    }

    if (!assetId || !userId || !amount) {
      toast.error("Asset, User, or Amount information is missing.");
      return;
    }
    setUploading(true);

    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("file", file);
    formData.append("amount", amount);
    formData.append("assetId", assetId); // Ensure assetId is passed correctly

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Upload failed. Try again.");
        return;
      }
      
      toast.success("Deposit submitted successfully!");
      onClose();

      // Refresh the page and navigate to /dashboard/deposit
      router.refresh();  // Refresh the page if needed (optional)
      router.push("/dashboard");  // Navigate to the deposit page

    } catch (error) {
      toast.error(error.message || "Upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <form onSubmit={handleUpload} className="space-y-4">
        <input ref={inputFileRef} type="file" required className="block w-full border p-2 rounded-lg" />
        <Button type="submit" disabled={uploading} className="w-full bg-blue-600 text-white py-2 rounded-lg">
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </form>
    </div>
  );
}
