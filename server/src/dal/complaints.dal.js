import mongoose from 'mongoose';
import { complaintsSchema } from '../models/complaints.model.js';

const Complaint = mongoose.model('Complaint', complaintsSchema);

export async function createComplaint(category, message) {
  const complaint = new Complaint({ category, message });
  return await complaint.save();
}

export async function getComplaint() {
  return await Complaint.find().sort({ createdAt: -1 });
}
