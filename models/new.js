const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    news: [
        {
            id: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            body: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    ]
}, {
    timestamps: true
})

const New = mongoose.model('New', newSchema);

module.exports = New;