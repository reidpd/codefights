const houseNumbersSum = inputArray => {
  let total = 0;
  while (inputArray[0] !== 0) {
    total += inputArray.shift();
  }
  return total;
};

module.exports = { fns: [ houseNumbersSum ] };
