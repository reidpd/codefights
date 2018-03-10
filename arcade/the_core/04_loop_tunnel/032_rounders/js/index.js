const rounders = value => {
  const digits = value.toString().split('');
  for (let i = digits.length-1; i > 0; i--) {
    if (parseInt(digits[i]) >= 5) {
      digits[i-1] = (parseInt(digits[i-1]) + 1).toString();
      digits[i] = '0';
    } else { digits[i] = '0' }
  }
  return parseInt(digits.join(''));
};

module.exports = { fns: [ rounders ] };
