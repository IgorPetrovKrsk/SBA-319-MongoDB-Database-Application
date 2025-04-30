import express from 'express';
import orderCTRL from '../controllers/orderController.mjs';

const router = express.Router();

router.get('/',orderCTRL.getAllOrders);
// router.get('/allIdle',truckCTRL.getAllIdleTrucks); //all idle before :licenceplate //order matters
// router.get('/allAvailable',truckCTRL.getAllAvailableTrucks); //all Available before :licenceplate //order matters
// router.get('/:licensePlate',truckCTRL.getTruckByLicensePlate);
router.post('/',orderCTRL.postNewOrder);
// router.put('/:licensePlate',truckCTRL.updateTruckByLicensePlate);
// router.delete('/:licensePlate',truckCTRL.deleteTruckByLicensePlate);

export default router