const weakNumbers = n => {
  let maxW = 0;
  const weaknesses = makeRange(1,n).map(x => {
    const w = defineWeakness(x);
    if (w > maxW) { maxW = w }
    return w;
  }).filter(x => x === maxW);
  return [maxW, weaknesses.length];
};

const defineWeakness = x => {
  if (x === 1) { return 0 }
  const x_divs = divisors(x).length;
  const div_map = makeRange(1,x-1).map(n => divisors(n).length);
  return div_map.filter(n_divs => n_divs > x_divs).length;
}

const makeRange = (a,b) => new Array(b-a+1).fill(a).map((x,i) => x+i);

const divisors = n => makeRange(1,n).filter(int => n % int === 0);

module.exports = { fns: [ weakNumbers, divisors, defineWeakness, makeRange ] };
