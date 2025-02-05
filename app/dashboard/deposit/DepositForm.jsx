"use client";

import { useState, useRef } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CopyToClipboardButton from "./CopyToClipboardButton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DepositForm({ assets }) {
  const [selectedAsset, setSelectedAsset] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");

  const [isCopied, setIsCopied] = useState(false);


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

 

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: Implement deposit logic here
        console.log("Depositing", selectedAsset, amount);
      }}
      className="mb-2 bg-white shadow-md p-4 rounded-lg"
    >
      <div className="space-y-4">
          {/* Amount Input */}
          <div className="bg-gray-50 p-4 rounded-lg">
          <Label htmlFor="deposit_Amount" className="text-sm text-gray-500">
           Deposit Amount($):
          </Label>
          <Input
            id="deposit_Amount"
            name="deposit_Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            className="bg-transparent p-2 rounded w-full"
          />
        </div>
        {/* Asset Selection */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label htmlFor="Asset_Name" className="text-sm text-gray-500">
            Choose Asset:
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

        {/* Wallet Address */}
        <div className=" bg-gray-50 p-4 rounded-lg">
              {walletAddress && <span class="italic text-neutral-500">{`Kindly make your of $${amount} to the Deposit Address ${walletAddress}`}</span>}
          <Label htmlFor="Asset_Address" className="flex justify-between text-sm text-gray-500">
            <span>Wallet Address:</span> <CopyToClipboardButton text={walletAddress} />
          </Label>
          <Input
            id="Asset_Address"
            name="Asset_Address"
            type="text"
            value={walletAddress}
            disabled
            readOnly
            className="bg-transparent p-2 rounded w-full text-gray-700"
          />
        </div>

      </div>

      {/* Submit Button */}
      <Button className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
        Proceed Deposit
      </Button>
    </form>
  );
}
