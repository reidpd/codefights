const minimalNumberOfCoins = (coins, price) => {
  const coinsUsed = coins.reverse().map((denom,i) => {
    if (price >= denom) {
      let remainder = price % denom;
      let denomCount = (price-remainder) / denom;
      price = remainder;
      return denomCount;
    }
    return 0;
  });
  return coinsUsed.reduce((a,b)=>a+b);
};

module.exports = { fns: [ minimalNumberOfCoins ] };
