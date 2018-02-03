const lateRide = n => {
  let hrs = Math.floor(n/60);
  let mins = n % 60;
  const str = [hrs,mins].join('');
  return str.split('').map(char => parseInt(char, 10)).reduce((acc,val) => acc + val);
};

module.exports = { fns: [ lateRide ] };
