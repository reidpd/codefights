const replaceMiddle = arr => {
  if (arr.length % 2 === 1) { return arr }

  let l = [], r = [];
  for (let i = 0; i < arr.length/2; i++) {
    if (i === (arr.length/2 - 1)) {
      l.push(arr[i] + arr[i+1]);
      return l.concat(r);
    }
    l.push(arr[i]);
    r.unshift(arr[arr.length-1-i]);
  }
};

module.exports = { fns: [ replaceMiddle ] };
