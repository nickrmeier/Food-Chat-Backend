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
router.get('/:id', handleValidateId, (req, res, next) => {
	Post.findById(req.params.id)
		.then(handleRecordExists)
		.then((postID) => {
			res.json(postID);
		})
		.catch(next);
});

// POST
router.post('/:restaurant', (req, res, next) => {
	Post.create(req.body)
		.then((post) => {
			Restaurant.findOne({ name: req.params.restaurant }).then(
				async (restaurant) => {
					restaurant.comments.push(post);
					await restaurant.save();
					console.log(restaurant);
					console.log('all done 🌟');
					process.exit();
				}
			);
		})
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
