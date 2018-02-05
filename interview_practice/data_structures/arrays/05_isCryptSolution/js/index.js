const isCryptSolution = (crypt, solution) => {
  const key = {};
  solution.forEach(pair => key[pair[0]] = pair[1]);
  const translation = crypt.map(word => word.split('').map(char => key[char]).join(''));
  if (translation.some(num => num.length > 1 && num[0] === '0')) { return false }
  const ints = translation.map(str => parseInt(str, 10));
  return ints[0] + ints[1] === ints[2];
};

module.exports = { fns: [ isCryptSolution ] };
