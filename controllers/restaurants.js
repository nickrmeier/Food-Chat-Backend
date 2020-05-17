const express = require('express');
const Restaurant = require('../models/Restaurant');

const router = express.Router();
//Get
router.get('/', (req, res) => {
    Restaurant.find({}).then(restaurant => res.json(restaurant))
})

// GET /:city
router.get('/:city', (req, res) => { 
    Restaurant.find( { city: req.params.city } )
    .then(restaurant => {res.json(restaurant)} )
 });

// GET /:id
router.get('/:city/:id', (req, res, next) => {
    Restaurant.findById( req.params.id )
        .then(restaurantID => { res.json(restaurantID) })
        .catch(next);
});

module.exports = router;