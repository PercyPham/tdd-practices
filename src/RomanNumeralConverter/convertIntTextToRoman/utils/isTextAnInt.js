const convertIntTextToInt = intText => {
  if (isNaN(intText)) return false;

  const convertedNum = +intText;

  const convertedNumIsFloat = convertedNum - parseInt(convertedNum) !== 0;
  if (convertedNumIsFloat) return false;

  return true;
};

module.exports = convertIntTextToInt;
