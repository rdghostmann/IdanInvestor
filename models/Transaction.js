import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }, // User making the transaction
    type: {
      type: String,
      enum: ["deposit", "withdrawal", "investment"],
      required: true
    }, // Type of transaction
    amount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "approved", "declined"],
      default: "pending"
    }, // Admin approval status
    proofImage: {
      type: String,
      default: ""
    },
  },
  { timestamps: true }
);

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
