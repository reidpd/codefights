const candles = (candlesNumber, makeNew, leftovers = 0) => {
  if (candlesNumber === 0 && leftovers < makeNew) { return 0 }
  else {
    let candlesBurned = candlesNumber;
    leftovers += candlesNumber;
    let newLeftovers = leftovers % makeNew;
    candlesNumber = Math.floor(leftovers / makeNew);
    return candlesBurned + candles(candlesNumber, makeNew, newLeftovers)
  }
};

module.exports = { fns: [ candles ] };
