const findEmailDomain = address => address.slice(address.lastIndexOf('@')+1);

module.exports = { fns: [ findEmailDomain ] };
