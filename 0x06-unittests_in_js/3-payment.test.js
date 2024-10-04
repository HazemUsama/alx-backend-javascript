const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('Using Utils.calculateNumber with the correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(30, 10);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 30, 10)).to.be.true;
    expect(calculateNumberSpy.returnValues[0]).to.equal(Utils.calculateNumber('SUM', 30, 10));

    calculateNumberSpy.restore();
  });
});
