const increaseNumberRoundness = n => {
  const arr = n.toString().split('');
  const zeroIdx = arr.indexOf('0');
  if (zeroIdx === -1) { return false }
  const digitsAboveZero = new Array(9).fill(1).map((x,i) => (x+i).toString());
  return !digitsAboveZero.every(num => arr.lastIndexOf(num) <= zeroIdx);
};

module.exports = { fns: [ increaseNumberRoundness ] };
