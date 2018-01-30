const isDigit = symbol => 48 <= symbol.codePointAt(0) && symbol.codePointAt(0) <= 57;

module.exports = { fns: [ isDigit ] };
