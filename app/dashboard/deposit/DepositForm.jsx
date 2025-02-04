"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { fetchAssets } from "@/lib/depositAction";
import { upload } from '@vercel/blob/client';

export default function DepositForm() {
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  // const [proofFile, setProofFile] = useState(null);
  // const [proofUrl, setProofUrl] = useState("");
  const inputFileRef = useRef(null);
  const [proofUrl, setProofUrl] = useState(null);


  useEffect(() => {
    async function loadAssets() {
      const data = await fetchAssets();
      setAssets(data);
    }
    loadAssets();
  }, []);

  const handleAssetChange = (e) => {
    const selected = assets.find((asset) => asset.name === e.target.value);
    setSelectedAsset(selected?.name || "");
    setWalletAddress(selected?.address || "");
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();

    const file = inputFileRef.current.files[0];
    const newBlob = await upload(file.name, file, {
      access: 'public',
      handleUploadUrl: '/api/upload',
    });

    setProofUrl(newBlob);
  };

  return (
    <form onSubmit={handleFileUpload}
    
    className="mb-2 bg-white shadow-md p-4 rounded-lg">
      <div className="space-y-4">
        {/* Asset Selection */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label htmlFor="Asset_Name" className="text-sm text-gray-500">Select Crypto to Deposit:</label>
          <select 
            id="Asset_Name"
            name="Asset_Name"
            value={selectedAsset}
            onChange={handleAssetChange}
            className="bg-transparent p-2 rounded w-full"
          >
            <option value="">-- Select Asset --</option>
            {assets.map((asset) => (
              <option key={asset.name} value={asset.name}>{asset.name}</option>
            ))}
          </select>
        </div>

        {/* Amount Input */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label htmlFor="deposit_Amount" className="text-sm text-gray-500">Amount:</label>
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
          <label htmlFor="Asset_Address" className="text-sm text-gray-500">Wallet Address:</label>
          <input 
            id="Asset_Address"
            name="Asset_Address"
            type="text"
            value={walletAddress}
            readOnly
            className="bg-transparent p-2 rounded w-full text-gray-700"
          />
        </div>

        {/* QR Code (Optional) */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label htmlFor="Asset_QRCODE" className="text-sm text-gray-500">Wallet QR Code:</label>
          {walletAddress ? (
            <Image 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${walletAddress}`}
              alt="Wallet QR Code"
              width={150}
              height={150}
            />
          ) : (
            <p className="text-gray-400">Select an asset to generate QR</p>
          )}
        </div>

        {/* Proof of Deposit Upload */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label htmlFor="deposit_Proof" className="text-sm text-gray-500">Upload Proof of Deposit:</label>
          <input 
            id="deposit_Proof"
            type="file"
            name="file"
            ref={inputFileRef}
            className="bg-transparent p-2 rounded w-full"
          />
          {proofUrl ? ( <img src={proofUrl.url} alt={proofUrl.url} style={{width:"200", height:"auto"}} />) : (<p className="text-sm text-green-500">Proof uploaded successfully</p>)}
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
        Proceed Deposit
      </button>
    </form>
  );
}
