import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      minlength: [3, "username must be at least 3 character long"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      minlength: [13, "username must be at least 3 character long"],
    },
    password: {
      type: String,
      required: true,
      trim: true,

      minlength: [5, "username must be at least 3 character long"],
    },
  },

  { timestamps: true }
);

 export const User = mongoose.model('User',userSchema)

