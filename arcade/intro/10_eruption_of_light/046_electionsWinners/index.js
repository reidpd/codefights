const electionsWinners = (/*array.integer*/ votes, /*integer*/ k ) => {
  let winners = 0;
  const mostVotes = votes[votes.indexOf(Math.max(...votes))];
  const frontrunners = votes.filter(c => c === mostVotes);
  if (frontrunners.length === 1) { winners++; }
  else { winners += (k > 0) ? frontrunners.length : 0 }

  const others = votes.filter(c => c < mostVotes);
  others.forEach((candidate, candidateIdx) => {
    const candidateCanWin = candidate + k > mostVotes;
    if (candidateCanWin) winners++;
  });
  return winners;
};

module.exports = { fns: [ electionsWinners ] };
