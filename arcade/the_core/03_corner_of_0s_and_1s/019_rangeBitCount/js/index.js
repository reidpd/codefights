const rangeBitCount = (a,b) => {
  const ints = new Array((b-a)+1).fill(a).map((n,i) => convertToBase2(n+i));
  return ints.join('').split('').filter(n => n !== '0').length;
};

const convertToBase2 = (n, bits = []) => {
  while (n !== 0) {
    let remainder = n % 2;
    bits.unshift(remainder);
    n -= remainder;
    n /= 2;
  }
  return bits.join('');
}

module.exports = { fns: [ rangeBitCount ] };
