const alphabetSubsequence = s => {
  let codepoints = s.split('').map((char,i) => s.charCodeAt(i));
  return codepoints.every((cp,i,arr) => i < arr.length-1 ? cp < arr[i+1]: true);
};

module.exports = { fns: [ alphabetSubsequence ] };
