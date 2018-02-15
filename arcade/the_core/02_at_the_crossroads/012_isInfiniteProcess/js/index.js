const isInfiniteProcess = (a,b) => {
  return (a > b || ((a%2 === 0 && b%2 === 1) || (a%2 === 1 && b%2 === 0)));
};

module.exports = { fns: [ isInfiniteProcess ] };
