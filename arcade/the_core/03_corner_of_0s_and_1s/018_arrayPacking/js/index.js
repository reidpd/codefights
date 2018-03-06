const arrayPacking = a => a.reduce((value, byte, idx) => value + byte * Math.pow(256, idx));

module.exports = { fns: [ arrayPacking ] };
