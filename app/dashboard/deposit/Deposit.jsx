import React from "react";
import DepositForm from "./DepositForm";
import { fetchAssets } from "@/lib/depositAction";
import { getServerSession } from "next-auth";

import User from "@/models/User";
import { authOptions } from "@/lib/auth";

const Deposit = async () => {
  // Fetch assets on the server side
  const assets = await fetchAssets();

  // Ensure only plain objects are passed
  const assetData = assets.map(({ name, depositAddress, _id }) => ({
    name,
    depositAddress,
    _id: _id.toString(), // Convert ObjectId to string
  }));

  // Server-side session fetching using getServerSession
  const session = await getServerSession(authOptions);  // Ensure correct `authOptions` is used

  if (!session?.user?.email) {
    return <p>Please log in to deposit funds.</p>;
  }

  // Fetch the user from the database using the session email
  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    console.log("User not found");
    throw new Error("User not found");
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="text-sm/5 mb-2 bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-purple-600 font-bold text-xl">Deposit Funds to Wallet</h2>
        <p className="text-slate-700">Top up your Account Balance Instantly</p>
      </div>

      <div className="w-full lg:w-1/3 space-y-6 basis-0">
        {/* Pass assets and userId as props */}
        <DepositForm userId={user._id.toString()} assets={assetData} />
      </div>
    </div>
  );
};

export default Deposit;
