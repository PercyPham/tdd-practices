const convert = require("./romanNumeralConverter");

describe("romanNumeralConverter", () => {
  describe("convert int to roman num", () => {
    it("should throw error if input is not int", () => {
      const convertNotIntText = () => convert.toRomanNum("abc");
      expect(convertNotIntText).toThrowError("Invalid Input");
    });

    it("should throw error if input is less than '0'", () => {
      const convertMinusOne = () => convert.toRomanNum("-1");
      expect(convertMinusOne).toThrowError("Invalid Input");
    });

    it("should throw error if input is '0'", () => {
      const convertZero = () => convert.toRomanNum("0");
      expect(convertZero).toThrowError("Invalid Input");
    });

    it("should convert int to basic roman num", () => {
      expect(convert.toRomanNum("1")).toBe("I");
      expect(convert.toRomanNum("5")).toBe("V");
      expect(convert.toRomanNum("10")).toBe("X");
      expect(convert.toRomanNum("50")).toBe("L");
      expect(convert.toRomanNum("100")).toBe("C");
      expect(convert.toRomanNum("500")).toBe("D");
      expect(convert.toRomanNum("1000")).toBe("M");
    });

    it("should convert 'one before' num to roman num correctly", () => {
      expect(convert.toRomanNum("4")).toBe("IV");
      expect(convert.toRomanNum("9")).toBe("IX");
      expect(convert.toRomanNum("40")).toBe("XL");
      expect(convert.toRomanNum("90")).toBe("XC");
      expect(convert.toRomanNum("400")).toBe("CD");
      expect(convert.toRomanNum("900")).toBe("CM");
    });

    it("should convert '123' to 'CXXIII'", () => {
      expect(convert.toRomanNum("123")).toBe("CXXIII");
    });

    it("should convert number that has 'one before' to roman num correctly", () => {
      expect(convert.toRomanNum("3949")).toBe("MMMCMXLIX");
    });
  });

  describe("convert roman num to int", () => {
    it("should throw error if input is empty string", () => {
      const convertEmptyString = () => convert.toIntNum("");
      expect(convertEmptyString).toThrowError("Invalid Input");
    });

    it("should throw error if input doesn't contain roman character", () => {
      const convertNonRomanNumText = () => convert.toIntNum("not Roman Num");
      expect(convertNonRomanNumText).toThrowError("Invalid Input");
    });

    it("should convert 'CXXIII' to 123", () => {
      expect(convert.toIntNum("CXXIII")).toBe(123);
    });

    it("should convert roman number that has 'one before' to int correctly", () => {
      expect(convert.toIntNum("MMMCMXLIX")).toBe(3949);
    });
  });
});
