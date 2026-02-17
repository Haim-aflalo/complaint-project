import mongoose from 'mongoose';

export const complaintsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});
