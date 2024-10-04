const request = require('request');
const { expect } = require('chai');
const { promisify } = require('util');

const asyncRequest = promisify(request.get);
const asyncRequestPost = promisify(request.post);
const url = 'http://localhost:7865';

describe('Index page', () => {

  it('should return correct status code', async () => {
    const response = await asyncRequest(url);
    expect(response.statusCode).to.equal(200);
  });

  it('should return correct result', async () => {
    const response = await asyncRequest(url);
    expect(response.body).to.equal('Welcome to the payment system');
  });

  it('should handle errors gracefully', async () => {
    const response = await asyncRequest(`${url}/nonexistent`);
    expect(response.statusCode).to.equal(404);
  });
});

describe('Cart page', () => {

  it('should return correct status code when :id is a number', async () => {
    const response = await asyncRequest(`${url}/cart/123`);
    expect(response.statusCode).to.equal(200);
  });

  it('should return correct status code (404) when :id is NOT a number', async () => {
    const response = await asyncRequest(`${url}/cart/abc`);
    expect(response.statusCode).to.equal(404);
  });

  it('should return correct result when :id is a number', async () => {
    const id = 123;
    const response = await asyncRequest(`${url}/cart/${id}`);
    expect(response.body).to.equal(`Payment methods for cart ${id}`);
  });

  it('should handle decimal numbers as invalid IDs', async () => {
    const response = await asyncRequest(`${url}/cart/12.34`);
    expect(response.statusCode).to.equal(404);
  });

  it('should handle negative numbers as invalid IDs', async () => {
    const response = await asyncRequest(`${url}/cart/-123`);
    expect(response.statusCode).to.equal(404);
  });
});

describe('Login endpoint', () => {

  it('should return correct status code and message for valid login', async () => {
    const response = await asyncRequestPost({
      url: `${url}/login`,
      json: true,
      body: { userName: 'Betty' }
    });
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.equal('Welcome Betty');
  });

  it('should handle missing userName in request body', async () => {
    const response = await asyncRequest({
      url: `${url}/login`,
      method: 'POST',
      json: true,
      body: {}
    });
    expect(response.statusCode).to.equal(404);
  });
});

describe('Available payments endpoint', () => {

  it('should return correct payment methods', async () => {
    const response = await asyncRequest(`${url}/available_payments`);
    expect(response.statusCode).to.equal(200);
    const paymentMethods = JSON.parse(response.body);
    expect(paymentMethods).to.deep.equal({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});
