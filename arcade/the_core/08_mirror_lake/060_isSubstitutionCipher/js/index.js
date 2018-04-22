const isSubstitutionCipher = (string1, string2) => {
  const order = [[string1, string2], [string2, string1]];
  return order.every(pair => {
    let a = pair[0], b = pair[1], cipher = {};
    a.split('').forEach((char, i) => {
      if (!cipher[char]) { cipher[char] = b[i] }
    });
    return a.split('').every((char,i) => cipher[char] === b[i]);
  });
};

module.exports = { fns: [ isSubstitutionCipher ] };
