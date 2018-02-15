const extraNumber = (a,b,c) => {
  const ints = [a,b,c];
  return ints.filter(item => ints.indexOf(item) === ints.lastIndexOf(item))[0];
};

module.exports = { fns: [ extraNumber ] };
