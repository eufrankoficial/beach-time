const mongoose = require('mongoose');

const CitySchemma = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sunrise: {
        type: String,
        required: true
    },
    sunset: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    temperatureDescription: {
        type: String,
        required: false
    },
    humidity: {
        type: Number,
        required: false,
    },
    windSpeedy: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('City', CitySchemma);