const numberOfClans = (divisors, k) => {
  let ints = new Array(k).fill(1).map((n,i)=>n+i), clans = [];

  while (ints.length > 0) {
    const clan = [], a = ints.shift();
    clan.push(a);

    for (let idx = 0; idx < ints.length; idx++) {
      const b = ints[idx];
      if (friendlyInts(a, b, divisors)) {
        clan.push(b);
        ints = ints.filter(int => int !== b);
        idx--;
      }
    }
    clans.push(clan);
  }
  return clans.length;
};

const friendlyInts = (a, b, divs) => {
  const nums = [a,b];
  return divs.every(div => acceptableDivisor(a,b,div));
}

const acceptableDivisor = (a,b,divisor) => {
  const nums = [a,b];
  const bothWork = nums.every(n => isDivisor(n, divisor));
  const neitherWork = nums.every(n => !isDivisor(n, divisor));
  return bothWork || neitherWork;
}

const isDivisor = (num, divisor) => num % divisor === 0;

module.exports = { fns: [ numberOfClans, friendlyInts, acceptableDivisor, isDivisor ] };
