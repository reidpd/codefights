// 4 ≤ text.length ≤ 50

const longestWord = /*string*/ text => {
  // create array of acceptable codepoints to draw from
  const latinChars = new Array(58).fill(65).map((item, i) => item + i).filter(val => val < 91 || val > 96);

  // in order to get an array of strings which only contain
  // consecutive latin characters, we split the text and map each one as follows:
  const wordMap = text.split('').map((char, idx) => {
    // if the given char has a codepoint that matches a latin char, map it
    if (latinChars.indexOf(text.codePointAt(idx)) !== -1) { return char }
    else { return '.' }
  // then we join the string, split it apart by periods, and then filter out the empty strings
  }).join('').split('.').filter(item => item.length !== 0);
  // then we sort the wordMap array by length and return the longest word
  return wordMap.sort((a,b) => a.length < b.length)[0];
};

module.exports = { fns: [ longestWord ] };
