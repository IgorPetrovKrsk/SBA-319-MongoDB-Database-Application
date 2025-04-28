import mongoose from "mongoose";

const truckSchema = new mongoose.Schema({
    licensePlate: {
        type: String,
        required: [true, 'Licence plate is required'],
        unique: [true, 'Licence plate should be unique']
    },
    driver: String,
    capacity: {
        type: Number,
        required: true,
        min: [0, 'Capacity cannot be less that 0'],
        max: [20000, 'Where did you get that king of truck?!?!?!']
    },
    status: {
        type: String,
        enum: {
            values: ['Available', 'En Route', 'Idle', 'Repairs'],
            message: '{VALUE} is not a valid status. Please choose from Available, En Route, Idle, or Repairs.'
        },
        default: 'Idle'
    }
});

truckSchema.statics.allIdleTrucks = function () {
    return this.find({status: 'Idle'});
}

export default mongoose.model("Truck", truckSchema)
