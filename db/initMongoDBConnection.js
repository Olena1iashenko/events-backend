import mongoose from "mongoose";
import "dotenv/config";

import env from "../utils/env.js";

// console.log(process.env.PORT);

const initMongoDBConnection = async () => {
  try {
    // const user = env("MONGODB_USER");
    // const password = env("MONGODB_PASSWORD");
    // const url = env("MONGODB_URL");
    // const name = env("MONGODB_NAME");
    // const DB_HOST = `mongodb+srv://${user}:${password}@testprojects.kry9i.mongodb.net/EventsProject?retryWrites=true&w=majority&appName=TestProjects`;
    const DB_HOST = `mongodb+srv://Olena:D.VEJSw8bLi3Jy5@testprojects.kry9i.mongodb.net/EventsProject?retryWrites=true&w=majority&appName=TestProjects`;
    await mongoose.connect(DB_HOST);
    console.log("Succsessfully connection to MongoDB");
  } catch (error) {
    console.log(`Connection error ${error.message}`);
    // throw error;
    process.exit(1);
  }
};

export default initMongoDBConnection;
