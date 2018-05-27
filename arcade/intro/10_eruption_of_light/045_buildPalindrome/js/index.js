const buildPalindrome = str => {
  for (let i = 0; i < str.length; i++) {
    const suffix = str.slice(0, i).split('').reverse();
    const newStr = str.concat(suffix.join(''));
    if (newStr.split('').reverse().join('') === newStr) { return newStr }
  }
};

module.exports = { fns: [ buildPalindrome ] };
