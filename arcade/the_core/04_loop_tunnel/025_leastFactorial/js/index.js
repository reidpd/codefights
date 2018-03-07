const leastFactorial = (n, k = 1) => {
  while (fact(k) < n) { k++; }
  return n === 1 ? 1 : fact(k);
};

const fact = n => n === 1 ? 1 : n * fact(n-1);

module.exports = { fns: [ leastFactorial ] };
