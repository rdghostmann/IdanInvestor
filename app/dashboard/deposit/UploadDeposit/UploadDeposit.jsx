"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function UploadDeposit({ userId, assetId, amount, onClose }) {
  const inputFileRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!inputFileRef.current.files[0]) {
      toast.error("Please select a file.");
      return;
    }

    setUploading(true);
    
    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);
    formData.append("assetId", assetId);
    formData.append("amount", amount);

    try {
      const response = await fetch("/api/deposit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      toast.success("Deposit submitted successfully!");
      onClose();
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

      <Button onClick={onClose} className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg">
        Close
      </Button>
    </div>
  );
}
