const avsm = a => {
  const map = a.map(x => {
    let a_copy = a.slice();
    a_copy[0] = Math.abs(a[0] - x);
    return a_copy.reduce((a,b) => a + Math.abs(b - x));
  });
  const lowest_val = Math.min(...map)
  return a[map.indexOf(lowest_val)];
};

module.exports = { avsm };
