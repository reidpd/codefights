const houseOfCats = legs => {
  const possiblePopulations = [];
  let people = legs / 2, remainder;
  while (people >= 0) {
    remainder = legs - (people*2);
    if (remainder % 4 === 0) {
      possiblePopulations.unshift(people);
    }
    people -= 1;
  }
  return possiblePopulations;
};

module.exports = { fns: [ houseOfCats ] };
