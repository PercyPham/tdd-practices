const convertIntTextToInt = require("./convertIntTextToInt");

const normalIntAndRomanNum = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

const oneBeforeNumAndRomanNum = {
  4: "IV",
  9: "IX",
  40: "XL",
  90: "XC",
  400: "CD",
  900: "CM"
};

const intAndRomanNum = { ...normalIntAndRomanNum, ...oneBeforeNumAndRomanNum };

const intKeys = Object.keys(intAndRomanNum).sort((a, b) => b - a);

const toRomanNum = intText => {
  const intNum = convertIntTextToInt(intText);
  if (intNum === 0) throw new Error("Invalid Input");

  let result = "";
  let remain = intNum;

  intKeys.forEach(intKey => {
    while (remain >= intKey) {
      result += intAndRomanNum[intKey];
      remain -= intKey;
    }
  });

  return result;
};

const romanNumeralConverter = {
  toRomanNum
};

module.exports = romanNumeralConverter;
