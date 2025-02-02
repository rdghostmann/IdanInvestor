import mongoose from "mongoose";

const AssetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    symbol: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    network: {
      type: String,
      required: true,
      enum: ["Ethereum", "Bitcoin", "Solana", "Polygon", "Binance Smart Chain"],
    },
    qrcodeImage: {
      type: String,
      default: null
    },
    depositAddress: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

const Asset = mongoose.models.Asset || mongoose.model("Asset", AssetSchema);

export default Asset;
