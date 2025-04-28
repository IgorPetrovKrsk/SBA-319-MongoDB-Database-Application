import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    truckLicencePlate: {
        type: String,
        required: [true, 'Licence plate is required']
    },
    status: {
        type: String,
        enum: {
            values: ['Pending', 'Delivered', 'Read'],
        },
        default: 'Pending'
    },
    orderId: String,
    content: {
        type: String,
        required: [true, 'Message cannot be empty']
    }
});

messageSchema.index({truckLicencePlate:1});
messageSchema.index({ status: 1 }); 

export default mongoose.model("Message", messageSchema)
