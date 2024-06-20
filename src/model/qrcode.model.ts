import mongoose, { model, Schema } from "mongoose";

const qrCodeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    destinationLink: {
      type: String,
      required: true,
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

const QRcode = mongoose.models?.qrcodes || model("qrcodes", qrCodeSchema);

export { QRcode };