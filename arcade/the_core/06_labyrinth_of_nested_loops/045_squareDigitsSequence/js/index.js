const squareDigitsSequence = a0 => {
  const sequence = [a0];
  while (allDigitsAreUnique(sequence)) {
    let lastItem = sequence[sequence.length-1];
    let digits = lastItem.toString().split('').map(int => Math.pow(parseInt(int,10), 2));
    sequence.push(digits.reduce((a,b) => a + b));
  }
  return sequence.length;
};

const allDigitsAreUnique = sequence => sequence.every((item, idx) => sequence.lastIndexOf(item) === idx);

module.exports = { fns: [ squareDigitsSequence, allDigitsAreUnique ] };
