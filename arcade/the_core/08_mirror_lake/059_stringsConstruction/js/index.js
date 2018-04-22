const stringsConstruction = (a,b) => {
  let num_of_strings = 0, breakBool = false;
  a = a.split(''), b = b.split('');
  while (true) {
    for (let idx = 0; idx < a.length; idx++) {
      if (b.indexOf(a[idx]) === -1) { breakBool = true; break; }
      b.splice(b.indexOf(a[idx]), 1);
    }
    if (breakBool) { break } else { num_of_strings++ }
  }
  return num_of_strings;
};

module.exports = { fns: [ stringsConstruction ] };
