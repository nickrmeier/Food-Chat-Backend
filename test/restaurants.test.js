const should = require('chai').should();

const expect = require('chai').expect;

const supertest = require('supertest');

const api = supertest('http://localhost:4000');

describe('GET/api/restaurants', (done) => {
	it('should return a 200 response', () => {
		api
			.get('/api/restaurants')
			.set('Accept', 'application/json')
			.expect(200, done);
	});
	it('should return an array', (done) => {
		api
			.get('/api/restaurants')
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.be.an('array');
				done();
			});
	});
});

describe('GET/api/restaurants/:city', (done) => {
	it('should return a 200 response', () => {
		api
			.get('/api/restaurants/New York')
			.set('Accept', 'application/json')
			.expect(200, done);
	});
	it('should return an array', (done) => {
		api
			.get('/api/restaurants/New York')
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.be.an('array');
				done();
			});
	});
});

describe('GET/api/restaurants/:city/:id', () => {
	it('should return a restaurants with the right fields', (done) => {
		api
			.get('/api/restaurants/New York/5ec563bebc50dcba64158c92')
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.include.all.keys(
					'_id',
					'name',
					'city',
					'image',
					'address'
				);
				done();
			});
	});
});
