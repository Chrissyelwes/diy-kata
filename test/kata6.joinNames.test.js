const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames()).toBe("Bart, Lisa & Maggie");
    expect(joinNames()).toBe("Aloy, Cirilla, Yennefer & Ellie");
  });
});
