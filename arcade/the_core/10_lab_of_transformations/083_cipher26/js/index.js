const cipher26 = message => {
  const alphabet = new Array(26).fill(0).map((int,i)=>String.fromCharCode(97+i));
  message = message.split('');
  let nums = [alphabet.indexOf(message.shift())];
  while (message.length > 0) {
    let lastNum = 0, desiredModulo = alphabet.indexOf(message.shift());
    while ((sum(nums, lastNum) % 26) !== desiredModulo) { lastNum++ }
    nums.push(lastNum);
  }
  return nums.map(int => alphabet[int]).join('');
}

const sum = (arr, lastNum) => arr.reduce((acc,cv)=>acc+cv) + lastNum;

module.exports = { fns: [ cipher26 ] };
