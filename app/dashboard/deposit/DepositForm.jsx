"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CopyToClipboardButton from "./CopyToClipboardButton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
          {/* Amount Input */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <Label htmlFor="deposit_Amount" className="text-sm text-gray-500">
              Deposit Amount ($):
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

          {/* Asset Selection */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <Label htmlFor="Asset_Name" className="text-sm text-gray-500">
              Choose Asset:
            </Label>
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

          {/* Asset Details */}
          {selectedAsset && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-4 space-y-1 text-pretty text-neutral-500 text-sm">
                <p className="text-purple-700">{`Only send ${amount} of ${selectedAsset.name} to the deposit address ${selectedAsset.depositAddress}.`}</p>
                <p className="text-purple-700">{`Ensure the sender is on ${selectedAsset.name} network.`}</p>
              </div>
              <Label htmlFor="Asset_Address" className="flex justify-between text-sm text-gray-500">
                <span>Wallet Address:</span>
                <CopyToClipboardButton text={selectedAsset.depositAddress} />
              </Label>
              <Input
                id="Asset_Address"
                type="text"
                value={selectedAsset.depositAddress}
                disabled
                readOnly
                className="bg-transparent p-2 rounded w-full text-gray-700"
              />
            </div>
          )}
        </div>
        {/* Deposit Button & Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button type="submit" className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
              Proceed Deposit
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-4 text-sm bg-white rounded-lg shadow-md">
            <h2 className="mb-4">Upload Proof of Deposit</h2>
            {selectedAsset && (
              <UploadDeposit
                userId={userId}
                assetId={selectedAsset._id}
                amount={amount}
                onClose={() => setShowUploadPopup(false)}
              />
            )}
          </PopoverContent>
        </Popover>
      </form>
    </>
  );
}
