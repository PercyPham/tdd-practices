const convertIntTextToInt = require("./convertIntTextToInt");

const intAndRomanNum = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
  4: "IV",
  9: "IX",
  40: "XL",
  90: "XC",
  400: "CD",
  900: "CM"
};

const descIntKeys = Object.keys(intAndRomanNum).sort((a, b) => b - a);

const romanNumAndInt = {};
descIntKeys.forEach(
  intKey => (romanNumAndInt[intAndRomanNum[intKey]] = parseInt(intKey))
);

const descRomanKeys = Object.keys(romanNumAndInt);

const toRomanNum = intText => {
  const intNum = convertIntTextToInt(intText);

  if (intNum <= 0) throw new Error("Invalid Input");

  let result = "";
  let remain = intNum;

  descIntKeys.forEach(intKey => {
    while (remain >= intKey) {
      result += intAndRomanNum[intKey];
      remain -= intKey;
    }
  });

  return result;
};

const checkContainRomanCharOnly = text => {
  const romanChars = Object.keys(romanNumAndInt).join("");
  return !text.split("").some(char => romanChars.indexOf(char) === -1);
};

const toIntNum = romanText => {
  if (romanText === "") throw new Error("Invalid Input");
  if (!checkContainRomanCharOnly(romanText)) throw new Error("Invalid Input");

  let result = 0;
  let remain = `${romanText}`;

  while (remain.length > 0) {
    const firstTwoLetters = remain.length >= 2 ? remain.substr(0, 2) : null;
    if (firstTwoLetters && romanNumAndInt[firstTwoLetters]) {
      result += romanNumAndInt[firstTwoLetters];
      remain = remain.substr(2, remain.length - 1);
    } else {
      const firstLetter = remain.substr(0, 1);
      result += romanNumAndInt[firstLetter];
      remain = remain.substr(1, remain.length - 1);
    }
  }

  return result;
};

const romanNumeralConverter = {
  toRomanNum,
  toIntNum
};

module.exports = romanNumeralConverter;
