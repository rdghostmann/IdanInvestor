"use client";
import { useState } from "react";
import { toast } from "sonner"; // For notifications
import { useRouter } from "next/navigation";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [asset, setAsset] = useState("BTC");
  const [proof, setProof] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !proof) {
      toast.error("Amount & Proof of deposit are required");
      return;
    }

    const formData = new FormData();
    formData.append("file", proof);

    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const uploadData = await uploadRes.json();

    const res = await fetch("/api/deposit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "123", // Replace with user ID from session
        amount,
        asset,
        proofImage: uploadData.url,
      }),
    });

    if (res.ok) {
      toast.success("Deposit request sent!");
      router.refresh();
    } else {
      toast.error("Deposit failed");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
      <h2 className="text-lg font-semibold mb-4">Deposit Funds</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="number" 
          placeholder="Enter Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          className="w-full p-2 border rounded-md"
        />
        
        <select 
          value={asset} 
          onChange={(e) => setAsset(e.target.value)} 
          className="w-full p-2 border rounded-md"
        >
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          <option value="SOL">Solana (SOL)</option>
        </select>

        <input 
          type="file" 
          onChange={(e) => setProof(e.target.files[0])} 
          className="w-full p-2 border rounded-md"
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Submit Deposit
        </button>
      </form>
    </div>
  );
}
