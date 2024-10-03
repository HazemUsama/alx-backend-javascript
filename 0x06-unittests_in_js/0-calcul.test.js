const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function() {
  it("Check simple sum", function() {
    assert.strictEqual(calculateNumber(3, 4), 7);
  });

  it("Check float numbers", function() {
    assert.strictEqual(calculateNumber(2.5, 7.6), 11);
  });

  it("Check for zero", function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
