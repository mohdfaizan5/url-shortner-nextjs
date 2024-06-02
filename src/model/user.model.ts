import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    image: {
      type: String,
    },
    googleId: {
      type: String,
    },
  },
  {}
);

const User = mongoose.models?.users || mongoose.model("users", userSchema);

export {User}