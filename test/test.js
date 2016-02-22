var leapYear = require('../main.js').leapYear;
var expect = require('chai').expect;

describe("leapYear", function() {
  it("returns true for 2016", function() {
    expect(leapYear(2016)).to.equal(true);
  });
  it("returns false for 2015", function () {
    expect(leapYear(2015)).to.equal(false);
  });
  it("returns false for 1700", function() {
    expect(leapYear(1700)).to.equal(false);
  });
  it("returns true for 1600", function () {
    expect(leapYear(1600)).to.equal(true);
  });
});
