import mongoose from 'mongoose';
import 'dotenv/config';

const URI = process.env.MONGO_URI;
export async function connectMongo() {
  try {
    await mongoose.connect(URI);
    console.log('Database is connected');
    return true;
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
}
