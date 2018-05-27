const fileNaming = names => {
  const result = [];

  names.forEach(name => {
    let count = 0, tmp = name;
    if (result.indexOf(name) > -1) {
      while (result.indexOf(tmp) > -1) {
        count++; tmp = name + '(' + count + ')';
      }
    }
    result.push(tmp)
  });

  return result;
};

module.exports = { fns: [ fileNaming ] };
