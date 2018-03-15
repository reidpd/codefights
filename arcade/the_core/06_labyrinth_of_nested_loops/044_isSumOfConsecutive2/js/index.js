const isSumOfConsecutive2 = n => {
  const consecutives = new Array(13).fill(1).map((n,i)=>n+i);
  let paths = [];
  consecutives.forEach((consec, start) => {
    let end = start+1;
    while (end !== consecutives[consecutives.length-1]) {
      paths.push(consecutives.slice(start, end));
      end++;
    }
  });
  return paths.filter(p => p.length > 1 && p.reduce((acc,val) => acc + val) === n).length;
};

module.exports = { fns: [ isSumOfConsecutive2 ] };
