const willYou = (young, beautiful, loved) => {
  if (loved) {
    return !young || !beautiful;
  } else {
    return young && beautiful;
  }
};

module.exports = { fns: [ willYou ] };
