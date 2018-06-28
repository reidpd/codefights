const timedReading = (maxLength, text) => {
  const words = text.toLowerCase().split('').map(char => {
    let cp = char.codePointAt(0);
    if (cp === 32 || (96 < cp && cp < 123)) { return char }
    else { return '*' }
  }).filter(char => char !== '*').join('').split(' ');
  return words.filter(w => w.length !== 0 && w.length <= maxLength).length;
};

module.exports = { fns: [ timedReading ] };
