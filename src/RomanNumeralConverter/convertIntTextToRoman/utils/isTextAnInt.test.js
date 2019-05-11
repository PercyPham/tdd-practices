const isTextAnInt = require("./isTextAnInt");

describe("isTextAnInt", () => {
  it(`should return false if input is not number`, () => {
    expect(isTextAnInt("Not a number")).toBe(false);
  });

  it(`should return false if input is floating number`, () => {
    expect(isTextAnInt("10.5")).toBe(false);
  });

  it(`should return true if input is '1'`, () => {
    expect(isTextAnInt("1")).toBe(true);
  });
});
