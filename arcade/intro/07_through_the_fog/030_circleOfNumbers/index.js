const circleOfNumbers = (n, firstNumber) => {
  let circle = new Array(n).fill(0).map((item, idx) => item + idx), x = 0;
  while (circle[0] !== firstNumber) { circle.push(circle.shift()); }
  return circle[n/2];
};

module.exports = { circleOfNumbers }
