import mongoose from 'mongoose';

const DepositSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    assetId: { 
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true
    },
    proofOfDeposit: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'declined'], 
      default: 'pending'
    },
  },
  { timestamps: true }
);


export default mongoose.models.Deposit || mongoose.model('Deposit', DepositSchema);
