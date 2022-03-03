const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa & Maggie.");
    expect(
      joinNames([
        { name: "Aloy" },
        { name: "Cirilla" },
        { name: "Yennefer" },
        { name: "Ellie" }
      ])
    ).toBe("Aloy, Cirilla, Yennefer & Ellie.");
  });
});
