const request = require('request');
const { expect } = require('chai');
const { promisify } = require('util');

const asyncRequest = promisify(request.get);

describe('Index page', () => {
  const url = 'http://localhost:7865';

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
  const url = 'http://localhost:7865';

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
