const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const CustomerScheme = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true   
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    balance: {
        type: Number,
        default: 0
    }
});

CustomerScheme.plugin(timestamp);
const Customer = mongoose.model('Customer', CustomerScheme);
module.exports = Customer;