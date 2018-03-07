const countSumOfTwoReps2 = (n,l,r) => {
  let pairs = 0, a = Math.floor(n/2), b = Math.ceil(n/2);
  while (l <= a && b <= r) { pairs++; a--; b++; }
  return pairs;
};

module.exports = { fns: [ countSumOfTwoReps2 ] };
