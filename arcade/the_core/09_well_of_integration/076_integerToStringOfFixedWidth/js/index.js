const integerToStringOfFixedWidth = (number, width) => {
  let numChars = number.toString().split(''), i;
    if (width <= numChars.length) {
        numChars = numChars.slice(numChars.length-width);
    } else {
        for (i = width - numChars.length; i > 0; i--) { numChars.unshift('0') }
    }
    return numChars.join('');
};

module.exports = { fns: [ integerToStringOfFixedWidth ] };
