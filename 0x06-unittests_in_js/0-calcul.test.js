const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function() {
  it("Check simple sum", function() {
    assert.strictEqual(calculateNumber(3, 4), 7);
  });

  it("Check float numbers", function() {
    assert.strictEqual(calculateNumber(2.5, 7.6), 11);
    assert.strictEqual(calculateNumber(8.2, 3.5), 12);
  });

  it("Check for zero", function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 2.3), 2);
  });

  it("Check for mixed number `float` & `integer`", function() {
    assert.strictEqual(calculateNumber(5, 6.3), 11);
    assert.strictEqual(calculateNumber(2, 3.8), 6);
  });

  it("Check for negative numbers", function() {
    assert.strictEqual(calculateNumber(-3, -6.3), -9);
    assert.strictEqual(calculateNumber(-4, -2), -6);
  });

  it("Check for big numbers", function() {
    assert.strictEqual(calculateNumber(10000000, 20000000), 30000000);
    assert.strictEqual(calculateNumber(10000000.2, 20000000.3), 30000000);
  });
});
