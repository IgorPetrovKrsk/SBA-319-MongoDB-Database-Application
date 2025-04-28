import Messages from '../models/messageSchema.mjs';

async function getAllMessages(req, res) {
    const allMessages = await Messages.find({});
    res.json(allMessages);
}


async function getAllMessagesByStatusOrLicencePlate(req, res) {
    let messages = await Messages.find({ truckLicencePlate: req.params.statusOrLicencePlate });
    if (!messages || messages.length == 0) {
        messages = await Messages.find({ status: req.params.statusOrLicencePlate });
        if (!messages || messages.length == 0) {
            res.json({ err: `Cannot find messages with license plate or status ${req.params.statusOrLicencePlate}` });
        }
    }
    res.json(messages);
}

async function postNewMessage(req, res) {
    delete req.body.status; //date and status should be schemas default
    delete req.body.date;  
    const newMessage = await Messages.create(req.body);
    res.json(newMessage);
}

// async function updateTruckByLicensePlate(req, res) {
//     const updatedTruck = await Trucks.findOneAndUpdate({ licensePlate: req.params.licensePlate }, req.body, { new: true });
//     if (!updatedTruck) {
//         res.json({ err: `Cannot find truck with license plate ${req.params.licensePlate}` })
//     }
//     res.json(updatedTruck);
// }

// async function deleteTruckByLicensePlate(req, res) {
//     const deletedTruck = await Trucks.findOneAndDelete({ licensePlate: req.params.licensePlate });
//     if (!deletedTruck) {
//         res.json({ err: `Cannot find truck with license plate ${req.params.licensePlate}` })
//     }
//     res.json(deletedTruck);
// }

export default { getAllMessages, getAllMessagesByStatusOrLicencePlate,postNewMessage }

