const mirrorBits = a => {
  return convertToBase10([...a.toString(2)].reverse().join(''));
};

const convertToBase10 = str => str.split('').reverse().map((x,idx) => parseInt(x,10) * Math.pow(2,idx)).reduce((acc,val) => acc + val);

module.exports = { fns: [ mirrorBits ] };
