const additionWithoutCarrying = (param1, param2, result = []) => {
  const nums = [param1, param2];
  let strs = nums.map(n => n.toString());
  const max_length = Math.max(...strs.map(s => s.length));
  strs = strs.map(n => {
    let rez = n.split('');
    while (rez.length < max_length) { rez.unshift('0') }
    return rez.map(str => parseInt(str, 10));
  });
  for (let i = max_length-1; i >= 0; i--) {
    const digit = sumSingleDigits(strs[0][i], strs[1][i]);
    result.unshift(digit.toString());
  }
  return parseInt(result.join(''));
};

const sumSingleDigits = (n1,n2) => n1+n2 >= 10 ? n1+n2 - 10 : n1+n2;

module.exports = { fns: [ additionWithoutCarrying ] };
