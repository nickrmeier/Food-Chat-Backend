const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const restaurantController = require('./controllers/restaurants')
const postController = require('./controllers/posts')
const app = express();


app.use(cors());


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use('/restaurants', restaurantController);
app.use('/restaurant/post', postController)


app.set('port', process.env.PORT || 4000);


app.listen(4000, () => {
    console.log('listening on port 4000');
});