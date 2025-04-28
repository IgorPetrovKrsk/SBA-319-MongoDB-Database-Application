import express from 'express';
import orderCTRL from '../controllers/orderController copy.mjs';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('orders');
});
// router.get('/',truckCTRL.getAllTrucks);
// router.get('/allIdle',truckCTRL.getAllIdleTrucks); //all idle before :licenceplate //order matters
// router.get('/allAvailable',truckCTRL.getAllAvailableTrucks); //all Available before :licenceplate //order matters
// router.get('/:licensePlate',truckCTRL.getTruckByLicensePlate);
// router.post('/',truckCTRL.postNewTruck);
// router.put('/:licensePlate',truckCTRL.updateTruckByLicensePlate);
// router.delete('/:licensePlate',truckCTRL.deleteTruckByLicensePlate);

export default router