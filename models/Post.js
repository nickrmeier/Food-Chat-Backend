const mongoose = require('../db/connection');

const postSchema = new mongoose.Schema(
    {
        title: String,
        summary: String,
        revisit: Boolean
    }

);

module.exports = mongoose.model('Post', postSchema);