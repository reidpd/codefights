const firstNotRepeatingCharacter = s => {
  const filter = s.split('').filter(char => s.indexOf(char) === s.lastIndexOf(char))[0];
  return !filter ? '_': filter;
}

module.exports = { fns: [ firstNotRepeatingCharacter ] };
