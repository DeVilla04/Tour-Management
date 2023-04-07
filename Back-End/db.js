import mongoose from "mongoose";
import dotenv from "dotenv";

// Load env variables
dotenv.config();
//Conncet to MongoDB
mongoose.Promise = global.Promise;
const mongo_url =
  process.env.MONGO_URL || "mongodb://localhost:27017/tour_management";
const dbConnect = async () => {
  try {
    await mongoose.connect(mongo_url, {});
  } catch (err) {
    console.log("Error while connecting to MongoDB: ", err);
  }
  console.log("Connected to MongoDB: ", mongo_url);
};

export default dbConnect;
