import mongoose from "mongoose";

const investmentPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  minInvestment: {
    type: Number,
    required: true,
  },
});

const InvestmentPlan = mongoose.models.InvestmentPlan || mongoose.model("InvestmentPlan", investmentPlanSchema);

export default InvestmentPlan;
