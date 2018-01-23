const evenDigitsOnly = n => n.toString().split('').every(num => parseInt(num) % 2 === 0);

module.exports = { evenDigitsOnly }
