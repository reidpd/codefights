const switchLights = a => {
  let candles = a.map(n => n === 1);
  candles.forEach((candleIsLit,i) => {
    if (candleIsLit) {
      for (let idx = 0; idx <= i; idx++) {
        candles[idx] = !candles[idx];
      }
    }
  });
  return candles.map(candleIsLit => candleIsLit ? 1 : 0);
};

module.exports = { fns: [ switchLights ] };
