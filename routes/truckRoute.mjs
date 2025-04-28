import express from 'express';
import truckCTRL from '../controllers/truckController.mjs';

const router = express.Router();

router.get('/',truckCTRL.getAllTrucks);
router.get('/:licensePlate',truckCTRL.getTruckByLicensePlate);
router.post('/',truckCTRL.postNewTruck);
router.put('/:licensePlate',truckCTRL.updateTruckByLicensePlate);
router.delete('/:licensePlate',truckCTRL.deleteTruckByLicensePlate);

router.get('//allIdle',truckCTRL.getAllIdleTrucks);

export default router