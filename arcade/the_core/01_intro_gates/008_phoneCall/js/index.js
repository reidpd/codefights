const phoneCall = (min1, min2_10, min11, s) => {
  const s_vals = [s]; s_vals.push(s - min1);

  for (let min = 2; min < 11; min++) {
    const previousVal = s_vals[min-1];
    s_vals.push(previousVal - min2_10);
  }

  while (s_vals[s_vals.length-1] > 0) {
    s_vals.push(s_vals[s_vals.length-1] - min11);
  }

  return s_vals.filter(val => val >= 0).length - 1;
};

module.exports = { fns: [ phoneCall ] };
