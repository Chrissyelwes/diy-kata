const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
   it("returns array of cat and dog years in first human year", () => {
    expect (humanCatDogYears(1)).toEqual([1, 15, 15])
});
  it("returns array of cat and dog years in second human year", () => {
      expect (humanCatDogYears(2)).toEqual([2, 24, 24])
  });

  it("returns array of cat and dog years in third human year and each year after that", () => {
      expect (humanCatDogYears(3)).toEqual([3, 28, 29])
      expect (humanCatDogYears(10)).toEqual([10,(15+9+(4*7)), (15+9+(5*7))])
    });
});

// Look Ma, no handlebars!!!
