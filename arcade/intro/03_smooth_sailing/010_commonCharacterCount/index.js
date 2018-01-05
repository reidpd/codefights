const commonCharacterCount = (s1,s2) => {
  let total = 0;
  const alphabet = [];
  for (let i = 97; i < 123; i++) { alphabet.push(String.fromCodePoint(i)) }
  alphabet.forEach(char => {
    if (s1.indexOf(char) !== -1 && s2.indexOf(char) !== -1) {
      let lengths = [s1,s2].map(str => str.split('').filter(character => character === char).length);
      total += lengths.sort((a,b) => a > b)[0];
    }
  })
  return total;
}

module.exports = { commonCharacterCount }
