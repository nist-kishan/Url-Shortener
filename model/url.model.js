import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  urlName: {
    type: String,
    required: true
  },
  urlHistory: [{
    accessAt: {
      type: Number
    }
  }]
}, { timestamps: true });

export const URL = mongoose.model("URL", urlSchema);
