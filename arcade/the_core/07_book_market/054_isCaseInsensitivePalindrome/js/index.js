const isCaseInsensitivePalindrome = inputString => isPalindrome(inputString.toLowerCase());

const isPalindrome = str => str === str.split('').reverse().join('');

module.exports = { fns: [ isCaseInsensitivePalindrome ] };
