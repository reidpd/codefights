/*

Codefights solution:
function killKthBit(n, k) {
  return  n & ~(1 << k - 1);
}

*/

const killKthBit = (n, k) => {
  if (n === 0) { return n }
  let baseTwo = convertToBase2(n), idx = baseTwo.length - k;
  let killMap = baseTwo.split('').map((x,i) => i === idx ? '0' : x).join('');
  let bit = baseTwo[idx];
  return bit === '0' ? n : convertToBase10(killMap);
};

const convertToBase2 = (n) => {
  let bits = [];
  while (n !== 0) {
    let remainder = n % 2;
    bits.unshift(remainder);
    n -= remainder;
    n /= 2;
  }
  return bits.join('');
}

const convertToBase10 = str => str.split('').reverse().map((x,idx) => parseInt(x,10) * Math.pow(2,idx)).reduce((acc,val) => acc + val);

module.exports = { fns: [ killKthBit, convertToBase2, convertToBase10 ] };
