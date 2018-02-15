const tennisSet = (score1, score2) => {
  const scores = [score1, score2];
  if (scores.every(score => score >= 5)) {
    return scores.filter(sc => sc === 7).length === 1;
  } else {
    return scores.some(sc => sc === 6);
  }
};

module.exports = { fns: [ tennisSet ] };
