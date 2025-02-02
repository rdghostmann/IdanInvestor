import mongoose from 'mongoose';

const DepositSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asset',
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    symbol: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asset',
      required: true
    },
    proofOfDeposit: {
      type: String,
      required: true
    }, // Vercel Blob Storage URL
    status: {
      type: String,
      enum: ['pending', 'approved', 'declined'], 
      default: 'pending'
    },
  },
  { timestamps: true }
);

export default mongoose.models.Deposit || mongoose.model('Deposit', DepositSchema);
