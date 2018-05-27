const areEquallyStrong = (myLeft, myRight, hisLeft, hisRight) => {
  const map = [[myLeft, myRight], [hisLeft, hisRight]].map(person => {
    return person.sort((a,b) => a > b);
  });
  return map[0][0] === map[1][0] && map[0][1] === map[1][1];
};

module.exports = { areEquallyStrong }
