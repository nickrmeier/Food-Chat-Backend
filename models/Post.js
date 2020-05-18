const mongoose = require('../db/connection');

const postSchema = new mongoose.Schema(
    {
        title: String,
        summary: String,
        revisit: String,
        restID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant'
        }
    }
);

module.exports = mongoose.model('Post', postSchema);