const spiralNumbers = n => {
  let spiral = new Array(n);
  for (let i = 0; i < n; i++) {
    spiral[i] = new Array(n).fill(undefined);
    if (i === 0) { spiral[i][0] = 1 }
  }
  while (spiral.some(row => row.some(item => item === undefined))) {
    let row;
    for (row = 0; row < spiral.length; row++) {
      if (spiral[row].indexOf(undefined) > -1) { break }
    }
    let first_undef = spiral[row].indexOf(undefined), last_undef = spiral[row].lastIndexOf(undefined);
    let val = spiral[row][first_undef-1] + 1, idx = first_undef;
    while (idx <= last_undef) { spiral[row][idx] = val++; idx++; }
    for (let i=0;i<3;i++) { spiral = rotateMatrix(spiral) }
  }
  while (spiral[0][0] !== 1) { spiral = rotateMatrix(spiral) }
  return spiral;
};

// from interview_challenges
const rotateMatrix = a => { // clockwise once
  const transposition = a.map((col, i) => a.map(row => row[i]));
  return transposition.map(row => row.reverse());
};

module.exports = { fns: [ spiralNumbers, rotateMatrix ] };
