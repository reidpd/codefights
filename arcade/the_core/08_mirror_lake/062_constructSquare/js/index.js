const constructSquare = s => {
  const square_nums = ((s) => {
    let arr = [], x = 1;
    while ((x*x).toString().length <= s.length) {
      arr.unshift(x*x);
      x++;
    }
    return arr.filter(n => n.toString().length === s.length);
  })(s);
  // console.log(square_nums);
  const uniqChars = s.slice().split('').filter((char,i) => s.indexOf(char) === i);
  while (square_nums.length > 0) {
    let hash = {}, numStr = square_nums[0].toString().split('');
    

    square_nums.shift();
  }
  return -1;
};

module.exports = { fns: [ constructSquare ] };
