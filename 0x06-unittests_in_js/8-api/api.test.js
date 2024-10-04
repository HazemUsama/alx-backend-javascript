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
