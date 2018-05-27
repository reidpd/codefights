const shapeArea = n => {
  if (n===1) return n;
  let blocks = 1;
  for (let i = 1; i < n; i++) {
      blocks += 4;
      blocks += (i - 1) * 4;
  }
  return blocks;
}

module.exports = { shapeArea }
