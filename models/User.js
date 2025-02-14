// User Model
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: null
  },
  country: {
    type: String,
      default: null
  },
  state: {
    type: String,
      default: null
  },
  walletBalance: {
    type: Number,
    default: 0
  },
  profitTotal: {
    type: Number,
    default: 0
  },
  assets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asset',
      default: null
    }
  ],
  plan: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Investment",
      default: null
    }
  ], // References selected investment plan
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
      default: null
    }
  ], // References transactions
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isVerified: {
    type: Boolean,
    default: false
  }, // For Magic Link verification

},
  {
    timestamps: true,
  });

// Fix the model export
const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
