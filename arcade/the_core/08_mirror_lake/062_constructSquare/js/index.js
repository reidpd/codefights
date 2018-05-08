const constructSquare = s => {
  const square_nums = ((s) => {
    let arr = [], x = 1;
    while ((x*x).toString().length <= s.length) {
      arr.unshift(x*x); x++;
    }
    return arr.filter(n => n.toString().length === s.length);
  })(s);
  let uniqChars = s.slice().split('').filter((char,i) => s.indexOf(char) === i);
  let charPopMap = uniqChars.map(c => s.split('').filter(char => char === c).length).sort((a,b)=>a<b);
  while (square_nums.length > 0) {
    let numStr = square_nums[0].toString().split('');
    let uniqNums = numStr.slice().filter((n,i,arr) => arr.indexOf(n) === i);
    let numPopMap = uniqNums.map(n => numStr.slice().filter(num => num === n).length).sort((a,b)=>a<b);
    if (numPopMap.every((n,i) => n === charPopMap[i])) {
      return square_nums[0];
    }
    square_nums.shift();
  }
  return -1;
};

module.exports = { fns: [ constructSquare ] };
