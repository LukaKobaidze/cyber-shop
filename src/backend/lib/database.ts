import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION!;

if (!MONGODB_CONNECTION) {
  throw new Error(
    "Please define the MONGODB_CONNECTION environment variable inside .env.local",
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function databaseConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose
      .connect(MONGODB_CONNECTION, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default databaseConnect;
