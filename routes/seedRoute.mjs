import express from 'express';
import Trucks from '../models/truckSchema.mjs';
import Orders from '../models/orderSchema.mjs';
import Messages from '../models/messageSchema.mjs';
import {trucksSeed,ordersSeed,messagesSeed} from '../seeds/seeds.mjs';
import {createValidationRules} from '../db/conn.mjs'

const router = express.Router();

router.post('/',async (req,res)=>{
    await Promise.all([Trucks.deleteMany({}), Orders.deleteMany({}), Messages.deleteMany({})]); //awaiting all simultaneously
    await Promise.all([Trucks.create(trucksSeed),Orders.create(ordersSeed),Messages.create(messagesSeed)]);//seeding all simultaneously
    res.send('Seeding done');
    createValidationRules();
});

export default router