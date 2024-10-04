const { expect } = require("chai");
const calculateNumber = require("./1-calcul.js");

describe('Test calculateNumber v2 `SUM`', () => {
  it("Check simple sum", function() {
    expect(calculateNumber('SUM', 3, 4)).to.equal(7);
  });

  it("Check float numbers", function() {
    expect(calculateNumber('SUM', 2.5, 7.6)).to.equal(11);
    expect(calculateNumber('SUM', 8.2, 3.5)).to.equal(12);
  });

  it("Check for zero", function() {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUM', 0, 2.3)).to.equal(2);
  });

  it("Check for mixed number `float` & `integer`", function() {
    expect(calculateNumber('SUM', 5, 6.3)).to.equal(11);
    expect(calculateNumber('SUM', 2, 3.8)).to.equal(6);
  });

  it("Check for negative numbers", function() {
    expect(calculateNumber('SUM', -3, -6.3)).to.equal(-9);
    expect(calculateNumber('SUM', -4, -2)).to.equal(-6);
  });

  it("Check for big numbers", function() {
    expect(calculateNumber('SUM', 10000000, 20000000)).to.equal(30000000);
    expect(calculateNumber('SUM', 10000000.2, 20000000.3)).to.equal(30000000);
  });
});

describe('Test calculateNumber v2 `SUBTRACT`', () => {
  it("Check for simple subtract", function() {
    expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 9, 2)).to.equal(7);
  });

  it("Check for negative answers", function() {
    expect(calculateNumber('SUBTRACT', 3, 9)).to.equal(-6);
    expect(calculateNumber('SUBTRACT', 4, 13)).to.equal(-9);
  });

  it("Check for negative number with positive answers", function() {
    expect(calculateNumber('SUBTRACT', -3, -5)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -1, -4)).to.equal(3);
  });

  it("Check for negative number with negative answers", function() {
    expect(calculateNumber('SUBTRACT', -9, -5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', -7, -4)).to.equal(-3);
  });

  it("Check for zero", function() {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0, 2.3)).to.equal(-2);
  });

  it("Check for big numbers", function() {
    expect(calculateNumber('SUBTRACT', 10000000, 20000000)).to.equal(-10000000);
    expect(calculateNumber('SUBTRACT', 10000000.2, 20000000.3)).to.equal(-10000000);
  });
});

describe('Test calculateNumber v2 `DIVIDE`', () => {
  it("Check simple division", function() {
    expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
  });

  it("Check division with floating point numbers", function() {
    expect(calculateNumber('DIVIDE', 7.6, 2.4)).to.equal(4);
    expect(calculateNumber('DIVIDE', 15.2, 3.7)).to.equal(3.75);
  });

  it("Check division by zero", function() {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });

  it("Check division with negative numbers", function() {
    expect(calculateNumber('DIVIDE', -9, 3)).to.equal(-3);
    expect(calculateNumber('DIVIDE', -15.7, 5.3)).to.equal(-3.2);
  });

  it("Check for big numbers", function() {
    expect(calculateNumber('DIVIDE', 10000000, 2000000)).to.equal(5);
    expect(calculateNumber('DIVIDE', 10000000.7, 2000000.2)).to.equal(5.0000005);
  });
});

