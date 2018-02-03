const maxMultiple = (divisor, bound) => {
  let multiplier = 1;
  while (divisor * multiplier < bound) { multiplier++ }
  if (multiplier * divisor !== bound) { multiplier-- };
  return divisor * multiplier;
};

module.exports = { fns: [ maxMultiple ] };
