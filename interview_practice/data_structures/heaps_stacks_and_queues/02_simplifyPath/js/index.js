const simplifyPath = path => {
  path = path.split('/')
    .filter((x,i)=>x.length!==0)
    .filter((x,i)=>x!=='.');
  while (path.indexOf('..') > -1) {
    let doubleDotIdx = path.indexOf('..');
    if (doubleDotIdx === 0) { path.shift() } else {
      path = path.filter((x,i)=> {
        return i !== doubleDotIdx && i !== doubleDotIdx - 1;
      });
    }
  }
  return '/' + path.join('/')
};

module.exports = { fns: [ simplifyPath ] };
