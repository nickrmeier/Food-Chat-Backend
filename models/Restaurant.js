const mongoose = require('../db/connection');
const Post = require('./Post');

const restaurantSchema = new mongoose.Schema(
    {
        name: String,
        city: String,
        image: String,
        address: String,
        comments: [Post.schema]
    },
);

module.exports = mongoose.model('Restaurant', restaurantSchema);