const lineEncoding = /*string*/ s => { // 4 <= s.toLowerCase().length <= 15
  s = leastDisjointSubStrings(s);
  return s.map(str => str.length > 1 ? (str.length + str[0]) : str).join('');
};

const leastDisjointSubStrings = s => {
  let subs = [], split = s.split('');
  subs.push(split.shift());
  split.forEach((char, charIdx) => {
    const lastChar = arr => arr[arr.length-1];
    const lastStringInBlocks = subs[subs.length-1];
    if (char === lastChar(lastStringInBlocks)) {
      subs[subs.length-1] += char;
    } else { subs.push(char) }
  });
  return subs;
};

module.exports = { fns: [ lineEncoding, leastDisjointSubStrings ] };
