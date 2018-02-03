const addTwoDigits = n => n.toString().split('').map(num => parseInt(num)).reduce((acc, val) => acc + val);

module.exports = { fns: [ addTwoDigits ] };
