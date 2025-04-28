import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const mongoUri = process.env.MONGOURI;

async function collectDB(){
    try {
        await mongoose.connect(mongoUri);
        console.log(`Connected to MongoDB (TMS)`);        
    } catch (err) {
        console.error(err);        
    }
}

export default collectDB