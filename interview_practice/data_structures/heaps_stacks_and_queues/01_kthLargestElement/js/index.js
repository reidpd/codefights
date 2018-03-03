const kthLargestElement = (nums, k) => {
    if (nums.length < 2) { return nums[0] }
    let slice = nums.slice(), order = [];
    while (order.length !== k) {
      let max = slice[0];
      slice.forEach(num => {if (num > max) { max = num }});
      order.push(max);
      let maxIdx = slice.indexOf(max);
      slice = slice.filter((num, idx) => idx !== maxIdx);
    }
    return order.pop();
};

module.exports = { fns: [ kthLargestElement ] };
