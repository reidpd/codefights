const convertToBase2 = require('../../017_killKthBit/js/index.js').fns[1];

const equalPairOfBits = (n,m) => {
  return ((n,m) => {
    let bits = [n,m].map(int => convertToBase2(int).split(''));
    const max_length = Math.max(...bits.map(ints => ints.length));
    if (max_length === 0) { return 1 }
    bits = bits.map(ints => {
      while (ints.length !== max_length) { ints.unshift('0') }
      return ints.reverse();
    });
    for (let i = 0; i < max_length; i++) {
      if (bits[0][i] === bits[1][i]) {
        return i === 0 ? 1 : Math.pow(2, i);
      }
    }
  })(n,m);
};

module.exports = { fns: [ equalPairOfBits ] };
