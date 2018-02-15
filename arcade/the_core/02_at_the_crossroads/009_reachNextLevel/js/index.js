const reachNextLevel = (experience, threshold, reward) => {
  return experience + reward >= threshold;
};

module.exports = { fns: [ reachNextLevel ] };
