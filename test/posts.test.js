const should = require('chai').should();

const expect = require('chai').expect;

const supertest = require('supertest');

const api = supertest('http://localhost:4000');

describe('POST /restaurant/post', () => {
	const newPost = {
		title: 'chicken',
		summary: 'chicken is good',
		revisit: true,
	};
	// call the post api to save the new restaurant to the database
	before((done) => {
		console.log(newPost);
		api
			.post('/restaurant/post')
			.set('Accept', 'application/json')
			.send(newPost)
			.end(done);
	});

	it('should include the new post in the collection', (done) => {
		api
			.get('/restaurant/post')
			.set('Accept', 'application/json')
			.end((error, response) => {
				console.log(response.body);
				const postToFind = response.body.find((post) => post.id === newPost.id);
				expect(postToFind).to.be.an('object');
				done();
			});
	});
});

describe('PUT /restaurant/post/:id', () => {
	let postToUpdate;
	before((done) => {
		api
			.get('/restaurant/post')
			.set('Accept', 'application/json')
			.end((error, response) => {
				console.log(response.body[0]);
				postToUpdate = response.body[0];
				done();
			});
	});
	before((done) => {
		api
			.put(`/restaurant/post/${postToUpdate._id}`)
			.set('Accept', 'application/json')
			.send({
				title: 'ice ',
				summary: 'ice cream is good',
				revisit: true,
			})
			.end(done);
	});
	it('can update a post by id', (done) => {
		api
			.get(`/restaurant/post/${postToUpdate._id}`)
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.have.property('revisit', true);
				done();
			});
	});
});

describe('DELETE /restaurant/post/:id', () => {
	let postToDelete;
	before((done) => {
		api
			.get('/restaurant/post')
			.set('Accept', 'application/json')
			.end((error, response) => {
				const post = response.body;
				postToDelete = post[post.length - 1]._id;
				done();
			});
	});
	before((done) => {
		api
			.delete(`/restaurant/post/${postToDelete}`)
			.set('Accept', 'application/json')
			.end(done);
	});
	it('deletes a restaurant by id', (done) => {
		api
			.get(`/restaurant/post/${postToDelete}`)
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.equal(null);
				done();
			});
	});
});
