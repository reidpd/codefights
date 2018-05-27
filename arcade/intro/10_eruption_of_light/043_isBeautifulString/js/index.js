const isBeautifulString = (inputString) => {
  const counts = new Array(26).fill(97)
    .map((num, i) => String.fromCodePoint(num + i) )
    .map(char => inputString.split('').filter(l => l === char).length);
  return !counts.slice(0,25).some((count, i) => count < counts[i+1]);
};

module.exports = { fns: [ isBeautifulString ] };
