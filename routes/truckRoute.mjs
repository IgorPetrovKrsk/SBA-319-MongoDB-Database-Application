import express from 'express';
import truckCTRL from '../controllers/truckController.mjs';

const router = express.Router();

router.get('/',truckCTRL.getAllTrucks);
router.get('/allIdle',truckCTRL.getAllIdleTrucks); //all idle before :licenceplate //order matters
router.get('/:licensePlate',truckCTRL.getTruckByLicensePlate);
router.post('/',truckCTRL.postNewTruck);
router.put('/:licensePlate',truckCTRL.updateTruckByLicensePlate);
router.delete('/:licensePlate',truckCTRL.deleteTruckByLicensePlate);



export default router