const should = require('chai').should();

const expect = require('chai').expect;

const supertest = require('supertest');

const api = supertest('http://localhost:4000');

describe('GET/api/post', (done) => {
	it('should return a 200 response', () => {
		api.get('/api/post').set('Accept', 'application/json').expect(200, done);
	});
	it('should return an array', (done) => {
		api
			.get('/api/post')
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.be.an('array');
				done();
			});
	});
});

describe('GET/api/post/:restaurantID', () => {
	it('should return a restaurants with the right fields', (done) => {
		api
			.get('/api/post/5ec2d1d2f9f2e844c801553a')
			.set('Accept', 'application/json')
			.end((error, response) => {
				console.log(response.body[0]);
				expect(response.body[0]).to.include.all.keys(
					'_id',
					'title',
					'summary',
					'revisit',
					'restID'
				);
				done();
			});
	});
});

describe('POST /api/post/:restaurantId', () => {
	const newPost = {
		title: 'chicken',
		summary: 'chicken is good',
		revisit: true,
	};
	// call the post api to save the new restaurant to the database
	before((done) => {
		console.log(newPost);
		api
			.post('/api/post')
			.set('Accept', 'application/json')
			.send(newPost)
			.end(done);
	});

	it('should include the new post in the collection', (done) => {
		api
			.get('/api/post')
			.set('Accept', 'application/json')
			.end((error, response) => {
				console.log(response.body);
				const postToFind = response.body.find((post) => post.id === newPost.id);
				expect(postToFind).to.be.an('object');
				done();
			});
	});
});

describe('PUT /api/post/:id', () => {
	let postToUpdate;
	const updatedPost = {
		title: 'pasta',
		summary: 'pasta is good',
		revisit: 'Yes',
	};
	before((done) => {
		api
			.get('/api/post')
			.set('Accept', 'application/json')
			.end((error, response) => {
				console.log(response.body[0]);
				postToUpdate = response.body[0];
				done();
			});
	});
	before((done) => {
		api
			.put(`/api/post/${postToUpdate._id}`)
			.set('Accept', 'application/json')
			.send(updatedPost)
			.end(done);
	});
	it('can update a post by id', (done) => {
		api
			.get('/api/post')
			.set('Accept', 'application/json')
			.end((req, response) => {
				expect(response.body[0]).to.have.property('revisit', 'Yes');
				done();
			});
	});
});

describe('DELETE /api/post/:id', () => {
	let postToDelete;
	before((done) => {
		api
			.get('/api/post')
			.set('Accept', 'application/json')
			.end((error, response) => {
				const post = response.body;
				console.log(response.body);
				postToDelete = post[post.length - 1]._id;
				console.log(postToDelete);
				done();
			});
	});
	before((done) => {
		api
			.delete(`/api/post/${postToDelete}`)
			.set('Accept', 'application/json')
			.end(done);
	});
	it('deletes a restaurant by id', (done) => {
		api
			.get(`/api/post/${postToDelete}`)
			.set('Accept', 'application/json')
			.end((error, response) => {
				console.log(response.body);
				expect(response.body.title).to.equal(undefined);
				done();
			});
	});
});
