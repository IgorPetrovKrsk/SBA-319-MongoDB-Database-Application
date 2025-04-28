import express from 'express';
import messageCTRL from '../controllers/messageController.mjs';

const router = express.Router();

router.get('/',messageCTRL.getAllMessages);
router.get('/:statusOrLicencePlate',messageCTRL.getAllMessagesByStatusOrLicencePlate);
router.post('/',messageCTRL.postNewMessage);
// router.put('/:licensePlate',truckCTRL.updateTruckByLicensePlate);
// router.delete('/:licensePlate',truckCTRL.deleteTruckByLicensePlate);

export default router