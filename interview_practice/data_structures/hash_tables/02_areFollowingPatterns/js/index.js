const areFollowingPatterns = (strings, patterns) => {
  return [strings, patterns].every((setOfKeys, keysIdx) => {
    let hash = {}, setOfVals = keysIdx === 0 ? patterns : strings;
    setOfKeys.forEach((key, idx) => {
      if (setOfKeys.indexOf(key) === idx) { hash[key] = setOfVals[idx]; }
    })
    return setOfKeys.every((key, idx) => hash[key] === setOfVals[idx]);
  });
};

module.exports = { fns: [ areFollowingPatterns ] };
