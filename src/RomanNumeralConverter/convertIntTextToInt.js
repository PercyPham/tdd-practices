const convertIntTextToInt = intText => {
  if (isNaN(intText)) throw new Error("Invalid Input");

  const result = +intText;

  const inputIsFloat = result - parseInt(result) !== 0;
  if (inputIsFloat) throw new Error("Invalid Input");

  return result;
};

module.exports = convertIntTextToInt;
