const romanVsInt = require("../../config/romanVsInt");

const isContainingRomanCharOnly = text => {
  const romanChars = Object.keys(romanVsInt).join("");
  return !text.split("").some(char => romanChars.indexOf(char) === -1);
};

const isRomanTextValid = romanText => {
  if (romanText !== "" && isContainingRomanCharOnly(romanText)) return true;
  return false;
};

module.exports = isRomanTextValid;
