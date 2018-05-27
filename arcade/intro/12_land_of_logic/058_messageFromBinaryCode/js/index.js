const messageFromBinaryCode = code => {
  let strands = [], start = 0, end = 1;
  while (strands.length !== code.length / 8) {
    strands.push(code.split('').slice((8*start++), (8*end++)).join(''));
  }
  return strands.map(str => String.fromCodePoint(parseInt(str, 2))).join('');
};

module.exports = { fns: [ messageFromBinaryCode ] };
