import mongoose from "mongoose";
import { app } from "./app";

// Function to start the server
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to MongoDB");

    // Start the Express server on port 3000
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  } catch (err) {
    console.error(err);
  }
};

// Start the server
start();
