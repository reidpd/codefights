const boxBlur = image => {
  let result = [];
  for (let y = 0; y < image.length-2; y++) {
    result.push([]);
    for (let x = 0; x < image[y].length-2; x++) {
        result[y].push(calculateInt(image, y, x));
    }
  }
  return result;
}

const calculateInt = (grid, y, x) => {
  let total = 0;
  for (let i = y; i < (y + 3); i++) {
    for (let j = x; j < (x + 3); j++) {
      total += grid[i][j];
    }
  }
  return Math.floor(total / 9);
}

module.exports = { boxBlur };
