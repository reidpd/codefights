const comfortableNumbers = (l,r) => {
  const range = makeSegment(l,r);
  if (range.length === 1) { return 0 }
  const acceptable_pairs = [];
  range.forEach((a, i) => {
    if (i === range.length-1) { return 'loop finished'; }
    const slice = range.slice(i+1);
    slice.forEach((b, j) => {
      const pair = [a,b];
      if (aComfyWithB(...pair) && aComfyWithB(...pair.reverse())) {
        acceptable_pairs.push(pair);
      }
    })
  })
  return acceptable_pairs.length;
};


const digitSum = n => n.toString().split('').map(n => parseInt(n)).reduce((acc,val) => acc + val);

const makeSegment = (n,m) => {
  if (m) { return new Array(m-n+1).fill(n).map((x,i) => x+i); }
  let start = n - digitSum(n), end = n + digitSum(n);
  return new Array(end - start + 1).fill(start).map((n,i) => n+i);
}

const findComfies = (n, range) => {
  let sumOfDigits = digitSum(n), comfies = [];
  for (let i = sumOfDigits * -1; i <= sumOfDigits; i++) {
    if (i !== 0 && range.indexOf(n+i) > -1) { comfies.push(n + i) }
  }
  return comfies;
}

const aComfyWithB = (a,b) => {
  const pair = [a,b];
  const segment = makeSegment(a);
  return a !== b && segment.indexOf(b) !== -1;
}

module.exports = { fns: [ comfortableNumbers, digitSum, makeSegment, aComfyWithB ] };
