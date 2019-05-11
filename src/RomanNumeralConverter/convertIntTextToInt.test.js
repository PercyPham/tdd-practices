const convertIntTextToInt = require("./convertIntTextToInt");

describe("convertIntTextToInt", () => {
  it(`should throw NaN eror if input is not number`, () => {
    const convertNaNText = () => convertIntTextToInt("Not a number");
    expect(convertNaNText).toThrowError("Invalid Input");
  });

  it(`should throw Invalid Input if input is floating number`, () => {
    const convertFloatText = () => convertIntTextToInt("10.5");
    expect(convertFloatText).toThrowError("Invalid Input");
  });

  it(`should convert '1' to 1`, () => {
    expect(convertIntTextToInt("1")).toBe(1);
  });
});
