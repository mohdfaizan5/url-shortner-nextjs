import mongoose, { Schema } from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    destinationLink: {
      type: String,
      required: true,
    },
    shortLink: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    visits: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Link = mongoose.models?.links || mongoose.model("links", linkSchema);

export { Link };
