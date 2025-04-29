import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("DB Error: ", error);
  }
};
