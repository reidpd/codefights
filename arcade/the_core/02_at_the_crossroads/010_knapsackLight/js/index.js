const knapsackLight = (value1, weight1, value2, weight2, maxW) => {
  if ((weight1 + weight2) <= maxW) { return value1 + value2 }

  let treasures = [ { value: value1, weight: weight1 },
                    { value: value2, weight: weight2 } ]
                  .filter(item => item.weight <= maxW);

  if (treasures.length < 2) { return !treasures.length ? 0 : treasures[0].value }
  else { return treasures.sort((a,b) => a.value < b.value)[0].value; }
};

module.exports = { fns: [ knapsackLight ] };
