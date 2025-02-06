"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CopyToClipboardButton from "./CopyToClipboardButton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UploadDeposit from "./UploadDeposit/UploadDeposit";

export default function DepositForm({ userId, assets }) {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [amount, setAmount] = useState("");
  const [showUploadPopup, setShowUploadPopup] = useState(false);

  const handleAssetChange = (assetName) => {
    const asset = assets.find((a) => a.name === assetName);
    setSelectedAsset(asset || null);
  };

  const handleDeposit = (e) => {
    e.preventDefault();
    if (!selectedAsset || !amount) {
      alert("Please select an asset and enter an amount.");
      return;
    }
    setShowUploadPopup(true);
  };

  return (
    <>
      <form onSubmit={handleDeposit} className="mb-2 bg-white shadow-md p-4 rounded-lg">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <Label htmlFor="deposit_Amount" className="text-sm text-gray-500">
              Deposit Amount($):
            </Label>
            <Input
              id="deposit_Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
              className="bg-transparent p-2 rounded w-full"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <label htmlFor="Asset_Name" className="text-sm text-gray-500">
              Choose Asset:
            </label>
            <Select onValueChange={handleAssetChange} value={selectedAsset?.name || ""}>
              <SelectTrigger className="bg-transparent p-2 rounded w-full">
                <SelectValue placeholder="-- Select Asset --" />
              </SelectTrigger>
              <SelectContent>
                {assets.map((asset) => (
                  <SelectItem key={asset._id} value={asset.name}>
                    {asset.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedAsset && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="italic mb-4 text-pretty text-neutral-500 text-sm">
                {`Kindly make your deposit of $${amount} to the Deposit Address ${selectedAsset.depositAddress}`}
              </p>
              <Label htmlFor="Asset_Address" className="flex justify-between text-sm text-gray-500">
                <span>Wallet Address:</span> <CopyToClipboardButton text={selectedAsset.depositAddress} />
              </Label>
              <Input id="Asset_Address" type="text" value={selectedAsset.depositAddress} disabled readOnly className="bg-transparent p-2 rounded w-full text-gray-700" />
            </div>
          )}
        </div>

        <Button type="submit" className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
          Proceed Deposit
        </Button>
      </form>

      {showUploadPopup && selectedAsset && (
        <div className="fixed min-w-full min-h-screen z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 font-light rounded-lg shadow-lg">
            <h2 className="text-lg mb-4">Upload Proof of Deposit</h2>
            <UploadDeposit userId={userId} assetId={selectedAsset._id} amount={amount} onClose={() => setShowUploadPopup(false)} />
          </div>
        </div>
      )}
    </>
  );
}
