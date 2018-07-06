const electionsWinners = (votes, k) => {
  const frontRunner = Math.max(...votes);
  const potentialWinners = votes.filter(candidateVotes => candidateVotes + k > frontRunner);
  if (potentialWinners.length === 0 && (votes.indexOf(frontRunner) === votes.lastIndexOf(frontRunner))) { potentialWinners.push(frontRunner) }
  return potentialWinners.length;
};

module.exports = { fns: [ electionsWinners ] };
