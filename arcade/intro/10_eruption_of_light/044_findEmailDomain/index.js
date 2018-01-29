const findEmailDomain = (address) => address.split('').slice(address.lastIndexOf('@')+1).join('');

module.exports = { fns: [ findEmailDomain ] };
