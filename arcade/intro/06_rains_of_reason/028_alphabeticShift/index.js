const alphabeticShift = str => {
  const chars = new Array(26).fill(97).map((n, idx) => String.fromCodePoint(n + idx));
  return str.split('').map(char => rearrange(chars, chars.indexOf(char))[1]).join('');
};

const rearrange = (arr, idxForStart) => arr.slice(idxForStart).concat(arr.slice(0, idxForStart));

module.exports = { alphabeticShift, rearrange };
