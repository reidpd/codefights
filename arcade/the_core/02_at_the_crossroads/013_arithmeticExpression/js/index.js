const arithmeticExpression = (a,b,c) => {
  return a+b === c || a-b === c || a*b === c || a/b === c;
};

module.exports = { fns: [ arithmeticExpression ] };
