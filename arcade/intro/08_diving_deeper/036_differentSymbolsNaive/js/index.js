const differentSymbolsNaive = str => str.split('').filter((char, idx) => str.indexOf(char) === idx).length;

module.exports = { differentSymbolsNaive }
