const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(1234)).toEqual([4, 3, 2, 1]);
    expect(numberToReversedDigits(56789)).toEqual([9, 8, 7, 6, 5]);
  });
});
