const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// POST
router.post('/', (req, res) => {
    Post.create(req.body)
        .then((post) => res.json(post));
})

module.exports = router;