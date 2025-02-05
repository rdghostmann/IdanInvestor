"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { upload } from "@vercel/blob/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DepositForm({ assets }) {
  const [selectedAsset, setSelectedAsset] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const inputFileRef = useRef(null);
  const [proofUrl, setProofUrl] = useState(null);

  const handleAssetChange = (assetName) => {
    const selected = assets.find((asset) => asset.name === assetName);

    if (selected) {
      setSelectedAsset(assetName);
      setWalletAddress(selected.depositAddress);
    } else {
      setSelectedAsset("");
      setWalletAddress("");
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();

    const file = inputFileRef.current.files[0];
    const newBlob = await upload(file.name, file, {
      access: "public",
      handleUploadUrl: "/api/upload",
    });

    setProofUrl(newBlob);
  };

  return (
    <form
      onSubmit={handleFileUpload}
      className="mb-2 bg-white shadow-md p-4 rounded-lg"
    >
      <div className="space-y-4">
        {/* Asset Selection */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label htmlFor="Asset_Name" className="text-sm text-gray-500">
            Select Crypto to Deposit:
          </label>
          <Select onValueChange={handleAssetChange} value={selectedAsset}>
            <SelectTrigger className="bg-transparent p-2 rounded w-full">
              <SelectValue placeholder="-- Select Asset --" />
            </SelectTrigger>
            <SelectContent>
              {assets.map((asset) => (
                <SelectItem key={asset.name} value={asset.name}>
                  {asset.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Amount Input */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label htmlFor="deposit_Amount" className="text-sm text-gray-500">
            Amount:
          </label>
          <input
            id="deposit_Amount"
            name="deposit_Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            className="bg-transparent p-2 rounded w-full"
          />
        </div>

        {/* Wallet Address */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label htmlFor="Asset_Address" className="text-sm text-gray-500">
            Wallet Address:
          </label>
          <input
            id="Asset_Address"
            name="Asset_Address"
            type="text"
            value={walletAddress}
            readOnly
            className="bg-transparent p-2 rounded w-full text-gray-700"
          />
        </div>

        {/* Proof of Deposit Upload */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label htmlFor="deposit_Proof" className="text-sm text-gray-500">
            Upload Proof of Deposit:
          </label>
          <input
            id="deposit_Proof"
            type="file"
            name="file"
            ref={inputFileRef}
            className="bg-transparent p-2 rounded w-full"
          />
          {proofUrl ? (
            <img
              src={proofUrl.url}
              alt="Proof of Deposit"
              style={{ width: "200px", height: "auto" }}
            />
          ) : (
            <p className="text-sm text-green-500">Proof uploaded successfully</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
        Proceed Deposit
      </button>
    </form>
  );
}
