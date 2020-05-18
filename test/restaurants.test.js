const should = require('chai').should();

const expect = require('chai').expect;

const supertest = require('supertest');

const api = supertest('http://localhost:4000');

describe('GET/restaurants', (done) => {
	it('should return a 200 response', () => {
		api
			.get('/restaurants')
			.set('Accept', 'application/json')
			.expect(200, done);
	});
	it('should return an array', (done) => {
		api
			.get('/restaurants')
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.be.an('array');
				done();
			});
	});
});

describe('GET/restaurants/:city', (done) => {
	it('should return a 200 response', () => {
		api
			.get('/restaurants/New York')
			.set('Accept', 'application/json')
			.expect(200, done);
	});
	it('should return an array', (done) => {
		api
			.get('/restaurants/New York')
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.be.an('array');
				done();
			});
	});
});

describe('GET/restaurants/:city/:id', () => {
	it('should return a restaurants with the right fields', (done) => {
		api
			.get('/restaurants/New York/5ec20a7639eb3f32803d22e8')
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
