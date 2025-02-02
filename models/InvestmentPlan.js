import mongoose from 'mongoose';

const InvestmentPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  minAmount: {
    type: Number,
    required: true,
  },
  maxAmount: {
    type: Number,
    required: true,
  },
  roi: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true
  },
  
}, {
  timestamps: true
});


// Fix the model export
const InvestmentPlan = mongoose.models?.InvestmentPlan || mongoose.model("InvestmentPlan", InvestmentPlanSchema);
export default InvestmentPlan;

