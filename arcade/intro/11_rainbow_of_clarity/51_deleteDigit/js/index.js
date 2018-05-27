// 10 ≤ n ≤ 106
const deleteDigit = n => {
  const split = n.toString().split('');
  return Math.max(...split.map((digit, digitIdx) => {
    const filter = split.slice().filter((val, idx) => idx !== digitIdx);
    return parseInt(filter.join(''), 10);
  }));
};

module.exports = { fns: [ deleteDigit ] };
