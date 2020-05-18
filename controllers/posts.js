const express = require('express');
const Post = require('../models/Post');
const {
	handleValidateId,
	handleRecordExists,
} = require('../middleware/custom_errors');
const router = express.Router();

//Get
router.get('/', (req, res, next) => {
	Post.find({}).then((post) => {
		res.json(post);
	});
});

//Get by ID
router.get('/:id', handleValidateId, (req, res, next) => {
	Post.findById(req.params.id)
		.then(handleRecordExists)
		.then((postID) => {
			res.json(postID);
		})
		.catch(next);
});

// POST
router.post('/', (req, res, next) => {
	Post.create(req.body)
		.then((post) => res.json(post))
		.catch(next);
});

// Put
router.put('/:id', handleValidateId, (req, res, next) => {
	Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then(handleRecordExists)
		.then((post) => res.json(post))
		.catch(next);
});

//Delete
router.delete('/:id', handleValidateId, (req, res, next) => {
	Post.findOneAndDelete({ _id: req.params.id })
		.then(handleRecordExists)
		.then((post) => res.json(post))
		.catch(next);
});
module.exports = router;
