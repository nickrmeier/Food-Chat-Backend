const mongoose = require('../db/connection');

const restaurantSchema = new mongoose.Schema(
    {
        name: String,
        city: String,
        image: String,
        address: String
    },

);

module.exports = mongoose.model('Restaurant', restaurantSchema);