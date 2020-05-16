const Restaurant = require('../models/Restaurant');
// Require the data
const seedData = require('./seed.json');

// Delete any existing documents in the jobs collection
Restaurant.deleteMany()
    // Use insertMany and pass it the seed data
    .then(() => Restaurant.insertMany(seedData))
    // Log the successful results
    .then(console.log)
    // Log any errors if things didn't work
    .catch(console.error)
    // Use finally, so that this code will run whether or not
    // things worked and close our connection to the database.
    .finally(process.exit);