const express = require('express');
const Post = require('../models/Post');
const Restaurant = require('../models/Restaurant');
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
router.get('/:restaurantID',  (req, res, next) => {
	Post.find({restID: req.params.restaurantID})
		// .then(handleRecordExists)
		.then((posts) => {
			res.json(posts);
		})
		.catch(next);
});

// POST
router.post('/:restaurantId', (req, res, next) => {
	Post.create(req.body).then((post) => {
		Restaurant.findById({ _id: req.params.restaurantId }).then((restaurant) => {
			post.restID.push(restaurant._id);
			post.save();
			res.json(post);
		});
	});
});

// Put
router.put('/:id', handleValidateId, (req, res, next) => {
	Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
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
