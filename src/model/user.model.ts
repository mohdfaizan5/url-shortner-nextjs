import mongoose, { Mongoose, Schema } from "mongoose";

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
    links: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Link"
      }
    ],
    qrCodes: [
      {
        type: Schema.Types.ObjectId,
        ref: "QRcode"
      }
    ]

  },{timestamps: true}
);

const User = mongoose.models?.users || mongoose.model("users", userSchema);

export {User}