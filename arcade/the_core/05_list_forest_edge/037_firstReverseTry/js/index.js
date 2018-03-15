const firstReverseTry = arr => {
  if (arr.length < 2) { return arr }

  const slice = arr.slice(1, arr.length-1);
  slice.unshift(arr.pop());
  slice.push(arr.shift());
  return slice;
};

module.exports = { fns: [ firstReverseTry ] };
