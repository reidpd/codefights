const reflectString = inputString => {
  const alphabet = new Array(26).fill(0).map((int,idx)=>String.fromCharCode(97+idx));
  return inputString.split('').map(char => {
    const reflectionIdx = alphabet.indexOf(char);
    return alphabet.reverse()[reflectionIdx];
  }).join('');
};

module.exports = { fns: [ reflectString ] };
