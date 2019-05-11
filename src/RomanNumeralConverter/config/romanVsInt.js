const intVsRoman = require("./intVsRoman");

const swapKeyAndValueOfObject = obj => {
  const reversedObj = {};
  Object.keys(obj).forEach(key => (reversedObj[obj[key]] = parseInt(key)));
  return reversedObj;
};

const romanVsInt = swapKeyAndValueOfObject(intVsRoman);

module.exports = romanVsInt;
