const commonCharacterCount = (s1,s2) => {
  let total = 0;
  const alpha = { bet: [] };
  for (let i = 97; i < 123; i++) { alpha.bet.push(String.fromCodePoint(i)) }
  alpha.bet.forEach(char => {
    let lengths = [];
    if (s1.indexOf(char) !== -1 && s2.indexOf(char) !== -1) {
      [s1,s2].forEach(str => {
        lengths.push(str.split('').filter(character => character === char).length)
      });
      total += lengths.sort((a,b) => a > b)[0];
    }
  })
  return total;
}

module.exports = { commonCharacterCount }
