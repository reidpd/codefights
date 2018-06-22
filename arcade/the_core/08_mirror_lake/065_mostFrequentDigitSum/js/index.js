const mostFrequentDigitSum = n => {
  const sequence = makeSequence(n).map(int => sumOfDigits(int));
  let counts = {};
  sequence.forEach(int => {
    if (!counts[int]) { counts[int] = 1 } else { counts[int]++ }
  });
  let keys = Object.keys(counts), maxCount = 0;
  keys.forEach(int => {
    if (counts[int] > maxCount) { maxCount = counts[int] }
  });
  let frequents = [];
  keys.forEach(int => {
    if (counts[int] === maxCount) { frequents.push(parseInt(int)) }
  });
  return Math.max(...frequents);
};

const makeSequence = n => {
    let sequence = [n];
    while (sequence[sequence.length-1] > 0) {
        let digitsSum = sumOfDigits(n);
        n -= digitsSum;
        sequence.push(n);
    }
    return sequence;
}

const sumOfDigits = n => {
    let digitSplit = n.toString().split('').map(str => parseInt(str));
    return digitSplit.reduce((a,b)=>a+b);
};


module.exports = { fns: [ mostFrequentDigitSum, makeSequence ] };
