const firstDigit = str => str.split('').filter(char => !isNaN(parseInt(char)))[0];

module.exports = { firstDigit };
