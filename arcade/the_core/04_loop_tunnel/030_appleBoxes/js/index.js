const appleBoxes = (k, counts = []) => {
  if (k < 2) { return -k };
  const boxes = new Array(k).fill(1).map((x,i) => x+i);
  [0,1].forEach(mod => {
    const colorBySize = boxes.filter(x => x % 2 === mod);
    const apples_squared = colorBySize.map(x => x*x);
    const apple_count = apples_squared.reduce((acc,val) => acc + val);
    counts.push(apple_count);
  });
  return counts[0] - counts[1];
};

module.exports = { fns: [ appleBoxes ] };
