import React from 'react'
import Image from "next/image";
import { upload } from "@vercel/blob/client";

const UploadDeposit = () => {

  const inputFileRef = useRef(null);
  const [proofUrl, setProofUrl] = useState(null);

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
    <>
      {/* Proof of Deposit Upload */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <Label htmlFor="deposit_Proof" className="text-sm text-gray-500">
          Upload Proof of Deposit:
        </Label>
        <Input
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
    </>
  )
}

export default UploadDeposit
