const characterParity = symbol => {
  symbol = parseInt(symbol,10);
  if (isNaN(symbol)) { return "not a digit" } else {
    return symbol % 2 === 0 ? 'even' : 'odd';
  }
};

module.exports = { fns: [ characterParity ] };
