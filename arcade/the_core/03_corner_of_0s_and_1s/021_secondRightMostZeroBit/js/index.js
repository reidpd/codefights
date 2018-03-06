const secondRightMostZeroBit = (n) => {
  return (n => {
    const convertToBase2 = (num = n, bits = []) => {
      while (num !== 0) {
        let remainder = num % 2;
        bits.unshift(remainder);
        num -= remainder;
        num /= 2;
      }
      return bits;
    };
    let conversion = convertToBase2().reverse();

    let zeros_found = 0, idx;
    conversion.forEach((bit, i) => {
      if (bit === '0') { zeros_found++ }
      if (zeros_found === 2) {
        idx = i; zeros_found++;
      }
    });

    return Math.pow(2, idx);
  })(n);
};

module.exports = { fns: [ secondRightMostZeroBit ] };
