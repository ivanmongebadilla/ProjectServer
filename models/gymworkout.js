const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    gymWorkouts: [
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

const Gymworkout = mongoose.model('Gymworkout', newSchema);

module.exports = Gymworkout;