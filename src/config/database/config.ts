import { printErrorMessage } from "@/lib/utils";
import mongoose from "mongoose";
import { EnvVariables } from "../env";

const { MONGO_URI } = EnvVariables;

export async function connectDB() {
  try {
    mongoose.connect(MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database connected successfully.");
    });
  } catch (error) {
    printErrorMessage(error);
  }
}
