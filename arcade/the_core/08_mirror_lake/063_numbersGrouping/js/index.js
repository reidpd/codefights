const numbersGrouping = a => {
  const tenPow = x => x * Math.pow(10,4);
  const numFallsWithinRange = (n, range) => range[0] <= n && n <= range[1];
  a = a.sort((a,b) => a - b);
  let x = 0, idx = 0;
  let headers = 0, individual_lines = 0;

  while (idx < a.length) {
    let range = [tenPow(x)+1, tenPow(x+1)];
    if (numFallsWithinRange(a[idx], range)) { headers++ }

    while (idx < a.length && numFallsWithinRange(a[idx], range)) {
      individual_lines++; idx++;
    }

    x++;
  }

  return headers + individual_lines;
};

module.exports = { fns: [ numbersGrouping ] };
