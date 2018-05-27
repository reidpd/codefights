const arrMaxAdjDiff = input => {
  let maxDiff = 0;
  for (let idx = 0; idx < input.length-1; idx++) {
    let pair = [input[idx], input[idx+1]].sort((a,b) => a < b);
    let diff = pair[0] - pair[1];
    if (diff > maxDiff) { maxDiff = diff }
  }
  return maxDiff;
}

module.exports = { arrMaxAdjDiff }
