import { config } from 'dotenv';
import mongoose from 'mongoose';

const result = config();

const MONGOURL=process.env.MONGOURL;


export async function connectToMongoDB() {
    try {
      await mongoose.connect(MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  }
