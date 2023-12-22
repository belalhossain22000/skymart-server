import mongoose from "mongoose";
import dotenv from 'dotenv';
import app from "./app.js";

dotenv.config();

let server

async function main() {

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb is connected successfully");
    server = app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();


process.on('unhandledRejection', () => {
    console.log(`😈 unahandledRejection is detected , shutting down ...`);
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    }
    process.exit(1);
  });
  
  process.on('uncaughtException', () => {
    console.log(`😈 uncaughtException is detected , shutting down ...`);
    process.exit(1);
  });
