const arrayMaxConsecutiveSum = (arr, k) => {
  let sums = [];
  for (let i = 0; i < arr.length-k+1; i++) {
    let total = 0;
    for (let j = i; j < i+k; j++) total += arr[j];
    sums.push(total);
  }
  console.log(sums);
  return Math.max(...sums);
}

module.exports = { arrayMaxConsecutiveSum };
