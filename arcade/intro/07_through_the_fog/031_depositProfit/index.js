const depositProfit = (deposit, rate, threshold) => {
  rate = 1 + (rate / 100);
  const depositHistory = [deposit, rate];
  if (howMuchSoFar(depositHistory) <= deposit) { return 0 }
  while (howMuchSoFar(depositHistory) < threshold) { depositHistory.push(rate) }
  return depositHistory.length-1;
};

const howMuchSoFar = arr => arr.reduce((a,b) => a * b);

module.exports = { depositProfit, howMuchSoFar };
