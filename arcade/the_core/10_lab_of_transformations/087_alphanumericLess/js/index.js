const alphanumericLess = (s1, s2) => {
    // return true if s1 is alphanumerically less than s2, otherwise false
    const seqs = [s1, s2].map(s => findTokenSeq(s));
    let compareBools = [];
    while (seqs.every(s => s.length > 0)) {
        let tokens = seqs.slice().map(s => s.shift());
        compareBools.push(compareTokens(...tokens))
        console.log('tokens === ', tokens)
        console.log('seqs === ', seqs)
    }
    console.log('compareBools === ', compareBools);
    if (seqs[0].length !== seqs[1].length) { return seqs[0].length < seqs[1].length }
    console.log(seqs);
    return compareBools.every(b => b);
};

const compareTokens = (a,b) => {
  if (symbolsMatchExpectation(a, b,'letter')) { return a < b }
  else if (symbolsMatchExpectation(a, b, 'digit')) {
    let leadingZeros = [a,b].map(num => {
      let digits = num.split('').slice(), count = 0;
      while (digits.shift() === '0') { count++ }
      return count;
    });
    const digits = tokens.map(t => parseInt(t,10));
    if (digits[0] === digits[1]) {
      return leadingZeros[0] < leadingZeros[1]);
    } else {
      return digits[0] < digits[1];
    }
  } else {
    return symbolIdentity(a) === 'digit' && symbolIdentity(b) === 'letter';
  }
}

const findTokenSeq = str => {
    const s = str.split('');
    let seq = [], stack = [];
    while (s.length > 0) {
        const char = s.shift();
        stack.push(char);
        if (isDigit(char)) {
            while (s.length !== 0 && isDigit(s[0])) {
                stack.push(s.shift());
            }
        }
        seq.push(stack.join(''));
        stack = [];
    }
    return seq;
}


const isDigit = str => !isNaN(parseInt(str));

const bothDigits = (sym1, sym2) => {
    const bools = [sym1,sym2].map(s => !isNaN(parseInt(s)));
    return bools[0] === bools[1];
}

const symbolIdentity = s => isNaN(parseInt(s)) ? 'letter' : 'digit';

const symbolsMatchExpectation = (sym1, sym2, expectation) => [sym1,sym2].map(s => symbolIdentity(s)).every(id => id === expectation);

const bothLetters = (sym1, sym2) => {
    return [sym1, sym2].map(s => symbolIdentity(s)).every(id => id === 'letter');
}


module.exports = { fns: [ alphanumericLess ] };
