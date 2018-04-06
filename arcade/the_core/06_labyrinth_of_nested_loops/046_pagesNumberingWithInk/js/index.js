const pagesNumberingWithInk = (current, numberOfDigits) => {
  let pagesNumbered = [];
  while (enoughDigitsForNum(current, numberOfDigits)) {
    pagesNumbered.push(current);
    numberOfDigits -= countDigits(current);
    current++;
  }
  return pagesNumbered.pop();
};

const countDigits = n => n.toString().length;

const enoughDigitsForNum = (n, digitsLeft) => countDigits(n) <= digitsLeft;

module.exports = { fns: [ pagesNumberingWithInk, countDigits, enoughDigitsForNum ] };
