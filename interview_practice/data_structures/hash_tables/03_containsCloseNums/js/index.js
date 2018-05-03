const containsCloseNums = (nums, k) => {
  let truth = false;
  if (nums.length < 2 || k === 0) { return truth; }
  const valsToIndices = {};
  nums.forEach((n,i) => {
    if (!valsToIndices[n]) {
      valsToIndices[n] = {};
      valsToIndices[n].arr = [];
      valsToIndices[n].prevDist = 0;
    }
    valsToIndices[n].arr.push(i);
    if (valsToIndices[n].arr.length >= 2) {
      let arr = valsToIndices[n].arr;
      valsToIndices[n].prevDist = arr[arr.length-1] - arr[arr.length-2];
      if (valsToIndices[n].prevDist <= k) { truth = true }
    }
  });
  return truth;
};

module.exports = { fns: [ containsCloseNums ] };
