import mongoose from "mongoose";
import { DATABASE_URI,NODE_ENV } from "../config/env.js";

if(!DATABASE_URI){
    throw new Error(`Please configure database url in mode:${NODE_ENV}`);
}

const dbConnect=async()=>{
    
    try {
const connection=await mongoose.connect(DATABASE_URI)
if(connection){
    console.log(`Database connection successful in ${NODE_ENV} mode`)
}

    }
    catch(error) {
 console.error("Error connecting database:",error);
 process.exit(1)
    }
}

export default dbConnect;