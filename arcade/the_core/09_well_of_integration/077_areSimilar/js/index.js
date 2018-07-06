const areSimilar = (a,b) => {
  const arrs = [a.slice(),b.slice()];
  let sorts = arrs.map(arr => arr.sort((a,b) => a-b));
  if (sorts[0].every((item,idx) => item === sorts[1][idx])) {
    let unequalEls = a.filter((item,idx) => item !== b[idx]);
    return unequalEls.length === 2 || unequalEls.length === 0;
  } else { return false }
};

module.exports = { fns: [ areSimilar ] };
