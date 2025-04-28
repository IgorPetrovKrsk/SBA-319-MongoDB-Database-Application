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
        } else {
            res.json(messages);
        }
    } else {
        res.json(messages);
    }
}

async function postNewMessage(req, res) {
    delete req.body.status; //date and status should be schemas default
    delete req.body.date;
    const newMessage = await Messages.create(req.body);
    res.json(newMessage);
}

async function updateMessageById(req, res) {

    req.body.date = Date.now();
    let updatedMessage = await Messages.findById(req.params.id);
    if (!updatedMessage) {
        res.json({ err: `Cannot find message with id ${req.params.id}` });
    } else if (updatedMessage.status != 'Pending') {
        res.json({ err: `Cannot change message witch in not 'Pending' id:${req.params.id}` });
    } else {
        Object.assign(updatedMessage, req.body);
        await updatedMessage.save();
        res.json(updatedMessage);
    }
}

// async function deleteTruckByLicensePlate(req, res) {
//     const deletedTruck = await Trucks.findOneAndDelete({ licensePlate: req.params.licensePlate });
//     if (!deletedTruck) {
//         res.json({ err: `Cannot find truck with license plate ${req.params.licensePlate}` })
//     }
//     res.json(deletedTruck);
// }

export default { getAllMessages, getAllMessagesByStatusOrLicencePlate, postNewMessage, updateMessageById }

