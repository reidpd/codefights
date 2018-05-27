const isMAC48Address = (/*string*/ inputString) => { // 15 <= inputString.length <= 20
  const split = inputString.split('-');
  return split.length === 6 && split.every(pair =>
    pair.length === 2 && pair.split('').every(char => !isNaN(parseInt(char, 16))));
};

module.exports = { fns: [ isMAC48Address ] };
