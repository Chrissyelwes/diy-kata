const { getEmployerRole } = require("../src");
const { employees } = require("./namesdata")

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Satti", employees)).toEqual("Developer");
    expect(getEmployerRole("Jenny", employees)).toEqual("Sales Associate");
    // eslint-disable-next-line prettier/prettier
    expect(getEmployerRole("Javid", employees)).toEqual("Human Recommended Reading Assistant");
  });
});
