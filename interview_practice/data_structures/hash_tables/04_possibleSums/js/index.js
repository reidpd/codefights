const possibleSums = (coins, quantity) => { // [10,50,100], [1,2,1]
  if (coins.length === 1) { return quanity }
  const sums = [];
  const collection = [];
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i], quant = quantity[i];
    for (let j = 0; j < quant; j++) { collection.push(coin) }
  }
  console.log(collection); // [10,50,50,100]

  // create variation maps in which values are replaced with 'null'
  const hash = {};

  coins.forEach((coin, c_idx) => {
    if (sums.indexOf(coin) === -1) { sums.push(coin) }
    hash[coin] = {}
    hash[coin].just_coin = collection.filter(c => c === coin);
    hash[coin].others = collection.filter(c => c !== coin);
    for (let i = 0; i < quantity[c_idx]; i++) {
      hash[coin][i] = hash[coin].just_coin.slice(i);
      if (i <= hash[coin].others.length) {
        if (!hash[coin].plus_others) { hash[coin].plus_others = {} }
        hash[coin].plus_others[i] = hash[coin][i].concat(hash[coin].others.slice(i));
      }
    }
  })
  console.log(hash);
  return sums.length;
};

module.exports = { fns: [ possibleSums ] };
