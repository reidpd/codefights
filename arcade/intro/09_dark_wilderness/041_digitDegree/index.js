const digitDegree = n => {
  let degree = 0;
  while (n > 9) {
    let digits = n.toString().split('').map(str => parseInt(str));
    n = digits.reduce((sum, num) => sum + num);
    degree++;
  }
  return degree;
};

module.exports = { fns: [ digitDegree ] }
