import mongoose from "mongoose";
const MONGO_URL="mongodb://localhost:27017/TanixDraw";
// import { MONGO_URL } from "./config";

const connectDB = async () => {
  try {
    console.log("URL = ",MONGO_URL);
    await mongoose.connect(MONGO_URL as string);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB ERROR:", err);
    process.exit(1);
  }
};

export  default  connectDB;