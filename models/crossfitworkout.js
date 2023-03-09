const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    crossfitWorkouts: [
        {
            id: {
                type: Number,
                required: true
            },
            day: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true
            },
            timer: {
                type: Number,
                required: false
            },
            workout: [
                {
                    id: {
                        type: Number,
                        required: true
                    },
                    workout: {
                        type: String,
                        required: true
                    },
                    link: {
                        type: String,
                        required: true
                    }
                }
            ]
        }
    ]
})

const Crossfitworkout = mongoose.model('Crossfitworkout', newSchema);

module.exports = Crossfitworkout;