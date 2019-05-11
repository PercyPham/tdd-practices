const converter = require("./romanNumeralConverter");

describe("romanNumeralConverter", () => {
  describe("convert normal num to roman num", () => {
    it("should throw error if input is not integer", () => {
      const convertNonIntText = () => converter.toRomanNum("notIntText");
      expect(convertNonIntText).toThrowError("Invalid Input");
    });

    it("should throw error if input is '0'", () => {
      const convertZero = () => converter.toRomanNum("0");
      expect(convertZero).toThrowError("Invalid Input");
    });

    it("should convert normal num to basic roman num", () => {
      expect(converter.toRomanNum("1")).toBe("I");
      expect(converter.toRomanNum("5")).toBe("V");
      expect(converter.toRomanNum("10")).toBe("X");
      expect(converter.toRomanNum("50")).toBe("L");
      expect(converter.toRomanNum("100")).toBe("C");
      expect(converter.toRomanNum("500")).toBe("D");
      expect(converter.toRomanNum("1000")).toBe("M");
    });

    it("should convert 'one before' num to roman num correctly", () => {
      expect(converter.toRomanNum("4")).toBe("IV");
      expect(converter.toRomanNum("9")).toBe("IX");
      expect(converter.toRomanNum("40")).toBe("XL");
      expect(converter.toRomanNum("90")).toBe("XC");
      expect(converter.toRomanNum("400")).toBe("CD");
      expect(converter.toRomanNum("900")).toBe("CM");
    });

    it("should convert '123' to 'CXXIII'", () => {
      expect(converter.toRomanNum("123")).toBe("CXXIII");
    });

    it("should convert number that has 'one before' to roman num correctly", () => {
      expect(converter.toRomanNum("3949")).toBe("MMMCMXLIX");
    });
  });
});