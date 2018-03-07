const magicalWell = (a,b,n) => {
  return n === 0 ? 0 :
    new Array(n)
    .fill(1).map((x,i) => x+i)
    .map((x,i) => (a+i) * (b+i))
    .reduce((total,val) => total + val);
};

module.exports = { fns: [ magicalWell ] };
