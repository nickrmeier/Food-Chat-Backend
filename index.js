const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const restaurantController = require('./controllers/restaurants')
const postController = require('./controllers/posts')
const {
	handleErrors,
	handleValidationErrors,
} = require('./middleware/custom_errors');
const app = express();


app.use(cors());


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use('/restaurants', restaurantController);
app.use('/restaurant/post', postController)

app.use(handleValidationErrors);
// The catch all for handling errors
// MUST BE PLACED IMMEDIATELY BEFORE `app.listen`
app.use(handleErrors);

app.set('port', process.env.PORT || 4000);


app.listen(4000, () => {
    console.log('listening on port 4000');
});