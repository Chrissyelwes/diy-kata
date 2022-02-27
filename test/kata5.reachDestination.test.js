/* eslint-disable prettier/prettier */
const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
   expect(reachDestination(60, 30)).toEqual('I should be there in 2 hours');
   expect(reachDestination(95, 20)).toEqual('I should be there in 5 hours');
  });
});
