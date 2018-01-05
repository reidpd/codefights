const sortByHeight = a => {
  let treeIndices = [], result = [];
  a.forEach((val, i) => { if (val === -1) { treeIndices.push(i) }});
  const heights = a.filter(val => val !== -1).sort((a,b) => a>b);
  for (let i = 0; i < a.length; i++) {
    console.log('heights === ', heights, ', treeIndices === ', treeIndices);
    console.log('result === ', result);
    treeIndices.indexOf(i) !== -1 ? result.push(-1): result.push(heights.shift());
  }
  return result;
}

module.exports = { sortByHeight }
