const allLongestStrings = inputArray => {
  const maxLength = Math.max(...inputArray.map(str => str.length));
  return inputArray.filter(str => str.length === maxLength);
};

module.exports = { fns: [ allLongestStrings ] };
