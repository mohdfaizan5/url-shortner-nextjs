import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connections && mongoose.connections[0].readyState) return;

    const connection = await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "url_shortener_nextjs",
    });

    console.log(`✅✅ DB connected with host ${connection.connection.host}`);
  } catch (error) {
    console.log("❌❌ Error while connecting to db", error);
    process.exit(1);
  }
};

export {connectDB}