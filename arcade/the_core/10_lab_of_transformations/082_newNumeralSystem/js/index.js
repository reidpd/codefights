const newNumeralSystem = number => {
  let result = [], letters = [number], charCode = number.charCodeAt(0) - 1;
  while (charCode >= 65) { letters.unshift(String.fromCharCode(charCode--)); }
  while (letters.length > 0) {
    const pair = [letters.shift()];
    if (letters.length === 0) { pair[1] = pair[0] }
    else { pair.push(letters.pop()) }
    result.push(pair)
  }
  return result.map(pair => pair[0] + " + " + pair[1]);
};

module.exports = { fns: [ newNumeralSystem ] };
