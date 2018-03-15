const isSmooth = arr => {
  const middle = findMiddle(arr);
  return [arr.shift(), arr.pop()].every(n => n === middle);
};

const findMiddle = arr => {
  if (arr.length % 2 === 1) { return arr[Math.floor(arr.length/2)] }
  else { return arr[arr.length/2] + arr[arr.length/2 - 1] }
}

module.exports = { fns: [ isSmooth, findMiddle ] };
