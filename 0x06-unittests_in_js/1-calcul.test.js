const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe('Test calculateNumber v2 `SUM`', () => {
  it("Check simple sum", function() {
    assert.strictEqual(calculateNumber('SUM', 3, 4), 7);
  });

  it("Check float numbers", function() {
    assert.strictEqual(calculateNumber('SUM', 2.5, 7.6), 11);
    assert.strictEqual(calculateNumber('SUM', 8.2, 3.5), 12);
  });

  it("Check for zero", function() {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', 0, 2.3), 2);
  });

  it("Check for mixed number `float` & `integer`", function() {
    assert.strictEqual(calculateNumber('SUM', 5, 6.3), 11);
    assert.strictEqual(calculateNumber('SUM', 2, 3.8), 6);
  });

  it("Check for negative numbers", function() {
    assert.strictEqual(calculateNumber('SUM', -3, -6.3), -9);
    assert.strictEqual(calculateNumber('SUM', -4, -2), -6);
  });

  it("Check for big numbers", function() {
    assert.strictEqual(calculateNumber('SUM', 10000000, 20000000), 30000000);
    assert.strictEqual(calculateNumber('SUM', 10000000.2, 20000000.3), 30000000);
  });
});

describe('Test calculateNumber v2 `SUBTRACT`', () => {
  it("Check for simple subtract", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 9, 2), 7);
  });

  it("Check for negative answers", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 9), -6);
    assert.strictEqual(calculateNumber('SUBTRACT', 4, 13), -9);
  });

  it("Check for negative number with positive answers", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -3, -5), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -4), 3);
  });

  it("Check for negative number with negative answers", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -9, -5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', -7, -4), -3);
  });

  it("Check for zero", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 2.3), -2);
  });

  it("Check for big numbers", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 10000000, 20000000), -10000000);
    assert.strictEqual(calculateNumber('SUBTRACT', 10000000.2, 20000000.3), -10000000);
  });
});

describe('Test calculateNumber v2 `DIVIDE`', () => {
  it("Check simple division", function() {
    assert.strictEqual(calculateNumber('DIVIDE', 8, 4), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 9, 3), 3);
  });

  it("Check division with floating point numbers", function() {
    assert.strictEqual(calculateNumber('DIVIDE', 7.6, 2.4), 4);
    assert.strictEqual(calculateNumber('DIVIDE', 15.2, 3.7), 3.75);
  });

  it("Check division by zero", function() {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
  });

  it("Check division with negative numbers", function() {
    assert.strictEqual(calculateNumber('DIVIDE', -9, 3), -3);
    assert.strictEqual(calculateNumber('DIVIDE', -15.7, 5.3), -3.2);
  });

  it("Check for big numbers", function() {
    assert.strictEqual(calculateNumber('DIVIDE', 10000000, 2000000), 5);
    assert.strictEqual(calculateNumber('DIVIDE', 10000000.7, 2000000.2), 5.0000005);
  });
});
