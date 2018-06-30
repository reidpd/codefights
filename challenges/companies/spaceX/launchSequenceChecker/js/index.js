const launchSequenceChecker = (systemNames, stepNumbers, lastStepFor = {}) => {
  // first attempt: took too long to complete, but more readable
  // const uniqSystems = systemNames.filter((sys, idx, arr) => arr.indexOf(sys) === idx);
  // return uniqSystems.every((sys, idx) => {
  //   const stepPlotIdxs = systemNames.map((name, idx) => name === sys);
  //   const stepPlot = stepNumbers.filter((num, idx) => stepPlotIdxs[idx]);
  //   return stepPlot.every((step, thisOne, steps) => thisOne < steps.length-1 ? step < steps[thisOne+1] : true)
  // });
  // second attempt
  for (let idx = 0; idx < stepNumbers.length; idx++) {
    const sys = systemNames[idx], step = stepNumbers[idx];
    if (lastStepFor[sys] >= step) { return false }
    lastStepFor[sys] = step;
  };
  return true;
};

module.exports = { fns: [ launchSequenceChecker ] };
