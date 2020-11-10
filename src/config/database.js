const mongoose = require('mongoose');

const connectToDatabase = function () {
    mongoose.connect('mongodb:localhost:27017/beachtime', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectToDatabase;