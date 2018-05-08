const createAnagram = (s,t) => {
  t = t.split(''), s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) > -1) {
      t[t.indexOf(s[i])] = '+';
    } else { s[i] = '_' }
  }
  return s.filter(char => char === '_').length;
};

module.exports = { fns: [ createAnagram ] };
