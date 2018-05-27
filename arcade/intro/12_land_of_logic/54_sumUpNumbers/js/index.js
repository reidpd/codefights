const sumUpNumbers = inputString => {
  // create array of codepoints for digits that can be drawn from
  const nums = new Array(10).fill(48).map((val, idx) => val + idx);

  // similar to 052's wordMap, we will create an array of just consecutive numbers
  const numMap = inputString.split('').map((char, idx) => {
    if (nums.indexOf(inputString.codePointAt(idx)) !== -1) { return char }
    else { return '.' }
  }).join('').split('.').filter(item => item.length !== 0).map(val => parseInt(val));

  // if the map has nothing in it, no numbers were found: therefore, return 0
  if (numMap.length === 0) { return 0 }

  // else, calculate the sum & return that
  const sum = numMap.reduce((sum,val) => sum += val);
  return sum;
};

module.exports = { fns: [ sumUpNumbers ] };
