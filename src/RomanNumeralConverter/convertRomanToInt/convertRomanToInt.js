const romanVsInt = require("../config/romanVsInt");
const isRomanTextValid = require("./utils/isRomanTextValid");

const convertRomanToInt = romanText => {
  if (!isRomanTextValid(romanText)) throw new Error("Invalid Input");

  let result = 0;
  let remain = `${romanText}`;

  while (remain.length > 0) {
    const firstTwoLetters = remain.length >= 2 ? remain.substr(0, 2) : null;
    if (firstTwoLetters && romanVsInt[firstTwoLetters]) {
      result += romanVsInt[firstTwoLetters];
      remain = remain.substr(2, remain.length - 1);
    } else {
      const firstLetter = remain.substr(0, 1);
      result += romanVsInt[firstLetter];
      remain = remain.substr(1, remain.length - 1);
    }
  }

  return result;
};

module.exports = convertRomanToInt;
