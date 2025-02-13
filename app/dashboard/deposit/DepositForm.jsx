"use client";

import { useState, useRef } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CopyToClipboardButton from "./CopyToClipboardButton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { depositUpload } from "@/lib/depositUpload";

export default function DepositForm({ assets }) {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [amount, setAmount] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputFileRef = useRef(null);
  const router = useRouter();

  const handleAssetChange = (assetName) => {
    const asset = assets.find((a) => a.name === assetName);
    setSelectedAsset(asset || null);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!inputFileRef.current.files[0]) {
      toast.error("Please select a file.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", inputFileRef.current.files[0]);
    formData.append("assetId", selectedAsset?.name);
    formData.append("amount", amount);

    console.log("FormData entries:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const response = await depositUpload(formData);
    

    if (response.status === 201) {
      router.push("/dashboard");
      toast.success("Deposit submitted successfully!");
    } else {
      toast.error(response.error || "Upload failed. Try again.");
    }

    setUploading(false);
  };

  return (
    <form onSubmit={handleUpload} className="mb-2 bg-white shadow-md p-4 rounded-lg">
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <Label htmlFor="deposit_Amount" className="text-sm text-gray-500">Deposit Amount ($):</Label>
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

        <div className="bg-gray-50 p-4 rounded-lg">
          <Label htmlFor="Asset_Name" className="text-sm text-gray-500">Choose Asset:</Label>
          <Select onValueChange={handleAssetChange} value={selectedAsset?.name || ""}>
            <SelectTrigger className="bg-transparent p-2 rounded w-full">
              <SelectValue placeholder="-- Select Asset --" />
            </SelectTrigger>
            <SelectContent>
              {assets.map((asset) => (
                <SelectItem key={asset._id || asset.name} value={asset.name} name={asset.name}>
                  {asset.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedAsset && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-purple-700 text-sm">
              {`Only send ${amount} of ${selectedAsset.name} to ${selectedAsset.depositAddress}.`}
            </p>
            <p className="text-purple-700 text-sm">Ensure the sender is on the correct network.</p>
            <Label htmlFor="Asset_Address" className="flex justify-between text-sm text-gray-500">
              <span>Wallet Address:</span>
              <CopyToClipboardButton text={selectedAsset.depositAddress} />
            </Label>
            <Input
              id="Asset_Address"
              name="Asset_Address"
              type="text"
              value={selectedAsset.depositAddress}
              disabled
              readOnly
              className="bg-transparent p-2 rounded w-full text-gray-700"
            />
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg">
          <Label htmlFor="proof-upload" className="text-sm text-gray-500">Proof of Payment:</Label>
          <Input ref={inputFileRef} type="file" name="proof-upload" id="proof-upload" required className="block w-full border p-2 rounded-lg" />
        </div>

        <Button type="submit" disabled={uploading} className="w-full bg-blue-600 text-white py-2 rounded-lg">
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </div>
    </form>
  );
}

// "use client";

// import { useState, useRef } from "react";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import CopyToClipboardButton from "./CopyToClipboardButton";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";

// export default function DepositForm({ assets }) {
//   const [selectedAsset, setSelectedAsset] = useState(null);
//   const [amount, setAmount] = useState("");
//   const [uploading, setUploading] = useState(false);
//   const inputFileRef = useRef(null);

//   const router = useRouter();

//   const handleAssetChange = (assetName) => {
//     const asset = assets.find((a) => a.name === assetName);

//     setSelectedAsset(asset || null);
//   };

//   const handleDeposit = (e) => {
//     e.preventDefault();
//     if (!selectedAsset || !amount) {
//       alert("Please select an asset and enter an amount.");
//       return;
//     }
//   };

//   const handleUpload = async (event) => {
//     event.preventDefault();

//     if (!inputFileRef.current.files[0]) {
//       toast.error("Please select a file.");
//       return;
//     }

//     setUploading(true);
//     const file = inputFileRef.current.files[0];
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("asset", selectedAsset?.name);
//     formData.append("amount", amount);

//     try {
//       const response = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.error);

//       router.push("/dashboard");
//       toast.success("Deposit submitted successfully!");
//     } catch (error) {
//       toast.error(error.message || "Upload failed. Try again.");
//     } finally {
//       setUploading(false);
//     }

//   };

//   return (
//     <>
//       <form onSubmit={handleUpload} className="mb-2 bg-white shadow-md p-4 rounded-lg">
//         <div className="space-y-4">
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <Label htmlFor="deposit_Amount" className="text-sm text-gray-500">
//               Deposit Amount ($):
//             </Label>
//             <Input
//               id="deposit_Amount"
//               name="deposit_Amount"
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Enter Amount"
//               className="bg-transparent p-2 rounded w-full"
//             />
//           </div>

//           <div className="bg-gray-50 p-4 rounded-lg">
//             <Label htmlFor="Asset_Name" className="text-sm text-gray-500">
//               Choose Asset:
//             </Label>
//             <Select onValueChange={handleAssetChange} value={selectedAsset?.name || ""}>
//               <SelectTrigger className="bg-transparent p-2 rounded w-full">
//                 <SelectValue placeholder="-- Select Asset --" />
//               </SelectTrigger>
//               <SelectContent >
//                 {assets.map((asset) => (
//                   <SelectItem key={asset._id || asset.name} value={asset.name}>
//                     {asset.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {selectedAsset && (
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <div className="mb-4 space-y-1 text-pretty text-neutral-500 text-sm">
//                 <p className="text-purple-700">{`Only send ${amount} of ${selectedAsset.name} to the deposit address ${selectedAsset.depositAddress}.`}</p>
//                 <p className="text-purple-700">{`Ensure the sender is on ${selectedAsset.name} network.`}</p>
//               </div>
//               <Label htmlFor="Asset_Address" className="flex justify-between text-sm text-gray-500">
//                 <span>Wallet Address:</span>
//                 <CopyToClipboardButton text={selectedAsset.depositAddress} />
//               </Label>
//               <Input
//                 id="Asset_Address"
//                 name="Asset_Address"
//                 type="text"
//                 value={selectedAsset.depositAddress}
//                 disabled
//                 readOnly
//                 className="bg-transparent p-2 rounded w-full text-gray-700"
//               />
//             </div>
//           )}
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <Label htmlFor="proof-upload" className="text-sm text-gray-500">
//               Proof of Payment:
//             </Label>
//             <Input ref={inputFileRef} type="file" name="proof-upload" id="proof-upload" placeholder="upload" required className="block w-full border p-2 rounded-lg" />
//           </div>
//           <Button type="submit" disabled={uploading} className="w-full bg-blue-600 text-white py-2 rounded-lg">
//             {uploading ? "Uploading..." : "Upload"}
//           </Button>
//         </div>
//       </form>
//     </>
//   );
// }
