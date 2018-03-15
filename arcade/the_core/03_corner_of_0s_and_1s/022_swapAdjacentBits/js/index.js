const convertToBase2 = require('../../017_killKthBit/js/index.js').fns[1];
const convertToBase10 = require('../../017_killKthBit/js/index.js').fns[2];

const swapAdjacentBits = n => {
  return (n => {
    if (n === 0) return 0;
    let baseTwo = convertToBase2(n).split(''), newFormation = [];
    if (baseTwo.length % 2 === 1) { baseTwo.unshift('0') }
    for (let i = 0; i < baseTwo.length; i+=2) {
      newFormation.push(baseTwo[i+1], baseTwo[i]);
    }
    return convertToBase10(newFormation.join(''));
  })(n);
};

module.exports = { fns: [ swapAdjacentBits ] };
