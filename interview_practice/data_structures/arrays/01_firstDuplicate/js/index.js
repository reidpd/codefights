const firstDuplicate = a => {
  const seen = {};
  for (let i = 0; i < a.length; i++) {
    if (seen[a[i]]) { return a[i] }
    else { seen[a[i]] = true; }
  }
  return -1;
};

module.exports = { fns: [ firstDuplicate ] };
