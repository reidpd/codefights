const makeArrayConsecutive2 = statues => {
  const max = statues.sort((a,b) => a < b)[0];
  const min = statues.sort((a,b) => a > b)[0];
  let missingStatues = 0;
  for (let minToMaxCount = min; minToMaxCount < max; minToMaxCount++) {
      if (statues.indexOf(minToMaxCount) === -1) { missingStatues++; }
  }
  return missingStatues;
}

module.exports = { makeArrayConsecutive2 }
