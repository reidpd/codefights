const allLongestStrings = inputArray => {
  const maxLength = inputArray.sort((a,b) => a.length < b.length)[0].length;
  return inputArray.filter(str => str.length === maxLength);
}

module.exports = { allLongestStrings }
