const electionsWinners = (votes, k) => {
  const frontRunner = Math.max(...votes);
  votes = votes.filter(candidateVotes => candidateVotes + k > frontRunner);
  return votes.length;
};

module.exports = { fns: [ electionsWinners ] };
