import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

// second approach for connecting database------->

const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log('mongodb connection error',error);
        process.exit(1) //exit ko padhana hai------>
    }
}

export default connectDB;