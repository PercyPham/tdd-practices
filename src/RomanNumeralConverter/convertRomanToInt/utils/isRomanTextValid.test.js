const isRomanTextValid = require("./isRomanTextValid");

describe("isRomanTextValid", () => {
  it("should return false if input is empty string", () => {
    expect(isRomanTextValid("")).toBe(false);
  });

  it("should return false if input contains char other than roman char", () => {
    expect(isRomanTextValid("V3")).toBe(false);
  });

  it("should return true if input is not empty and contain roman char only", () => {
    expect(isRomanTextValid("XV")).toBe(true);
  });
});
