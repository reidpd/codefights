const rotateImage = a => {
  const transposition = a.map((col, i) => a.map(row => row[i]));
  return transposition.map(row => row.reverse());
};

module.exports = { fns: [ rotateImage ] };
