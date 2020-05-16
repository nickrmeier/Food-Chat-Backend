const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// POST
router.post('/', (req, res) => {
	Post.create(req.body).then((post) => res.json(post));
});

// Put
router.put('/:id', (req, res) => {
	Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((post) => res.json(post));
});

//Delete
router.delete('/:id', (req, res) => {
    Post.findOneAndDelete({ _id: req.params.id })
    .then((post) => res.json(post));
});
module.exports = router;
