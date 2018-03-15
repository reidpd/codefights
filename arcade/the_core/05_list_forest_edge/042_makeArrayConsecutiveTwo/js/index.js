const makeArrayConsecutive2 = statues => {
  let min = Math.min(...statues), max = Math.max(...statues), count = 0;
  const positions = new Array(max-min+1).fill(min).map((n,i) => n+i);
  positions.forEach(statue_spot => {
    if (!statues.includes(statue_spot)) { count++ }
  });
  return count;
};

module.exports = { fns: [ makeArrayConsecutive2 ] };
