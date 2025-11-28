// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // load .env

// const connectToDatabase = async () => {
//   const uri = process.env.MONGO_URI || process.env.MONGODB_URL;
//   if (!uri) {
//     console.error("FATAL: MONGO_URI (or MONGODB_URL) is not defined in .env");
//     process.exit(1);
//   }

//   try {
    
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }
// };

// export default connectToDatabase;
// // ...existing code...

// ...existing code...
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToDatabase = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URL;
  if (!uri) {
    console.error('FATAL: MONGO_URI (or MONGODB_URL) missing in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      
      serverSelectionTimeoutMS: 10000,
      bufferCommands: false,
    });
    console.log('MongoDB connected');
    console.log('mongoose.readyState =', mongoose.connection.readyState); 
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectToDatabase;
// ...existing code...