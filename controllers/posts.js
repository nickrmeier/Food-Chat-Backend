const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//Get
router.get('/', (req, res) => {
	Post.find({}).then((post) => {
		res.json(post);
	});
});

//Get by ID
router.get('/:id', (req, res) => {
	Post.findById(req.params.id)
	.then((postID) => {
		res.json(postID);
	});
});

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
	Post.findOneAndDelete({ _id: req.params.id }).then((post) => res.json(post));
});
module.exports = router;
