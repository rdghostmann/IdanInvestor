import mongoose from "mongoose";

const InvestmentSchema = new mongoose.Schema(
  {
    investId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    planName: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    profit: {
      type: Number,
      required: true
    },
  },
  { timestamps: true }
);


// Fix the model export
const Investment = mongoose.models?.Investment || mongoose.model("Investment", InvestmentSchema);
export default Investment;
