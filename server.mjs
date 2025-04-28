import express from 'express';
import dotenv from 'dotenv';
import { globalErrorHandler } from './globalErrorHandler/globalErrorHandler.mjs';
import connectDB from './db/conn.mjs';
import truckRoutes from './routes/truckRoute.mjs'

dotenv.config();
const PORT = process.env.PORT;
const app = express();
connectDB();

app.use(express.json());

app.use('/trucks',truckRoutes);

app.use(globalErrorHandler);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);    
});

