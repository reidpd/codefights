const rearrangePalindrome = str => {
  if (str === str.split('').reverse().join('')) { return true }
  // a palindrome can only exist if one or fewer characters has an odd count
  const charCounts = {};
  str.split('').forEach(char => charCounts[char] ? charCounts[char]++ : charCounts[char] = 1);
  let truth = true, oddCounter = 0;
  for (key in charCounts) {
    if (charCounts[key] % 2 !== 0) {
      oddCounter++;
      if (oddCounter === 2) { truth = false; break; }
    }
  }
  return truth;
}

module.exports = { rearrangePalindrome }
