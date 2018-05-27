const alternatingSums = (a) => {
  const sums = [0, 0]
  a.forEach((val, i) => sums[i%2] += val);
  return sums;
}

module.exports = { alternatingSums }
