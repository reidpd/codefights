const isPower = n => {
  if (n === 1) { return true }
  const bases = new Array(400).fill(2).map((n,i)=>n+i);
  let i = 0;
  while (Math.pow(bases[i], 2) <= n) {
    let base = bases[i], exponent = 2;
    while (Math.pow(base, exponent) <= n) {
      if (Math.pow(base,exponent) === n) { return true }
      exponent++;
    }
    i++;
  }

  return false;
};

module.exports = { fns: [ isPower ] };
