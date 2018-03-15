const removeArrayPart = (inputArray, l, r) => {
  const idxs = new Array((r-l)+1).fill(l).map((n,i) => n+i);
  return inputArray.filter((n,i) => !idxs.includes(i));
};

module.exports = { fns: [ removeArrayPart ] };
