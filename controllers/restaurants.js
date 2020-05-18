const express = require('express');
const Restaurant = require('../models/Restaurant');
const {
	handleValidateId,
	handleRecordExists,
} = require('../middleware/custom_errors');

const router = express.Router();
//Get
router.get('/', (req, res, next) => {
	Restaurant.find({})
		.then((restaurant) => res.json(restaurant))
		.catch(next);
});

// GET /:city
router.get('/:city', (req, res, next) => {
	Restaurant.find({ city: req.params.city })
		.then((restaurant) => {
			res.json(restaurant);
		})
		.catch(next);
});

// GET /:id
router.get('/:city/:id', handleValidateId, (req, res, next) => {
    Restaurant.findById(req.params.id)
			.then(handleRecordExists)
			.then((restaurantID) => {
				res.json(restaurantID);
			})
			.catch(next);
});

module.exports = router;
