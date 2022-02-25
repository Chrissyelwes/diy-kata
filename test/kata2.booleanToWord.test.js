const { booleanToWord, getEmployerRole } = require("../src");

describe("booleanToWord", () => {
  it ('returns yes if given the value true', () => {
    expect(booleanToWord(true)).toEqual('Yes');
  });
  it ('returns no if given the value false', () => {
    expect(booleanToWord(false)).toEqual('No')
  });

});
