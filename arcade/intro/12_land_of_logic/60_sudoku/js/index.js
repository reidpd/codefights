const sudoku = grid => {
  let arrangements = [grid, rotateMatrix(grid), nineGridSplit(grid)];
  return arrangements.every(way => {
    console.log(way);
    return way.every(row => allNumsPresent(row));
  });
};

const allNumsPresent = arr => {
  let nums = new Array(9).fill(1).map((x,i)=>x+i);
  return nums.every(n => arr.indexOf(n) > -1);
}

const rotateMatrix = a => { // clockwise once
  const transposition = a.map((col, i) => a.map(row => row[i]));
  return transposition.map(row => row.reverse());
};

const nineGridSplit = grid => {
  const nine_grid_split = [];
  let x_mult = 0;
  while (x_mult < 3) {
    for (mult = 0; mult < 3; mult++) {
      let mult_base = 3 * mult;
      let slices = grid.slice(mult_base, mult_base + 3)
        .map((row,i) => {
          return row.filter((item,j) => {
            let x_base = 3 * x_mult;
            return x_base <= j && j < x_base + 3;
          })
        });
      let subsection = [];
      slices.forEach(slice => subsection.push(...slice));
      nine_grid_split.push(subsection)
    }
    x_mult++;
  }
  return nine_grid_split;
}

module.exports = { fns: [ sudoku, nineGridSplit ] };
