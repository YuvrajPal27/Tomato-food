import dns from 'node:dns';

// Set the DNS servers to bypass local/ISP connection issues
dns.setServers(['8.8.8.8', '1.1.1.1']);
import mongoose from "mongoose";


export const connectDB = async () => {
     try {
    await mongoose.connect('mongodb+srv://yuvi724:Yuvraj27052002@cluster0.zlm5bvr.mongodb.net/?appName=Cluster0');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error HEREEE:", error);
  }
}