const isLucky = n => {
  let split = n.toString().split('');
  let len = split.length;
  const nums = [n,n].map((num, i) => {
    num = i === 0 ? split.slice(0, len/2): split.slice(len/2);
    return num.map(no => parseInt(no)).reduce((acc, val) => acc += val);
  });
  return nums[0] === nums[1];
}

module.exports = { isLucky }
