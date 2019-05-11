const isTextAnInt = require("./utils/isTextAnInt");
const intVsRoman = require("../config/intVsRoman");

const descIntKeys = Object.keys(intVsRoman).sort((a, b) => b - a);

const convertIntTextToRoman = intText => {
  if (!isTextAnInt(intText)) throw new Error("Invalid Input");
  const intNum = +intText;

  if (intNum <= 0) throw new Error("Invalid Input");

  let result = "";
  let remain = intNum;

  descIntKeys.forEach(intKey => {
    while (remain >= intKey) {
      result += intVsRoman[intKey];
      remain -= intKey;
    }
  });

  return result;
};

module.exports = convertIntTextToRoman;
