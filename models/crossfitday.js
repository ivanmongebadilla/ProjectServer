const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({ 
    crossfitDays: [
        {
            id: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            intensity: {
                type: String,
                required: true
            }
        }
    ]
}, {
    timestamps: true
})

const Crossfitday = mongoose.model('Crossfitday', newSchema);

module.exports = Crossfitday;