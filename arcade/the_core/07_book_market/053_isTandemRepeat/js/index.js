const isTandemRepeat = inputString => {
  const half = inputString.slice(inputString.length / 2);
  return inputString === half + half;
};

module.exports = { fns: [ isTandemRepeat ] };
