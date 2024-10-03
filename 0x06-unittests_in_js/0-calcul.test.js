const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function() {
  it("Check simple sum", function() {
    assert.equal(calculateNumber(3, 4), 7);
  });

  it("Check float numbers", function() {
    assert.equal(calculateNumber(2.5, 7.6), 11);
  });

  it("Check for zero", function() {
    assert.equal(calculateNumber(0, 0), 0);
  });
});
