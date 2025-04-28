import express from 'express';
import dotenv from 'dotenv';
import { globalErrorHandler } from './globalErrorHandler/globalErrorHandler.mjs';
import connectDB from './db/conn.mjs';
import truckRoutes from './routes/truckRoute.mjs';
import messageRoutes from './routes/messageRoute.mjs';
import orderRoutes from './routes/orderRoute.mjs';
import seedRoute from './routes/seedRoute.mjs';
import hateoas from './hateos/hateoas.mjs';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
connectDB();

app.use(express.json());

app.get('/', hateoas.getRootHateoas);

app.use('/seed', seedRoute); //seeding

app.use('/trucks',truckRoutes);
app.use('/messages',messageRoutes);
app.use('/orders',orderRoutes);

app.use(globalErrorHandler);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);    
});

