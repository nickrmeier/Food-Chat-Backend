const mongoose = require('./connection');
const Restaurant = require('../models/Restaurant');
const Post = require('../models/Post');
// Require the data
const seedData = require('./seed.json');
Restaurant.deleteMany({})
	.then(() => Restaurant.insertMany(seedData))
	.then(console.log)
	// .then(() => {
	//     console.log('deleted all restaurants ❌');
	//     Restaurant.insertMany(seedData).then((restaurants) => {
	//         console.log('seeded all restaurants ✅');
	//         Restaurant.findOne({ name: 'Pasta Sisters' }).then(async (restaurant) => {
	//             const post = new Post({
	//                 title: 'ok food',
	//                 summary: 'the food was ok',
	//                 revisit: false,
	//                 restID: restaurant._id,
	//             });
	//             restaurant.comments.push(post);
	//             await restaurant.save();
	//             console.log(restaurant);
	//             console.log('all done 🌟');
	//             process.exit();
	//         });
	//     });
	// })
	.catch((err) => console.log(err));