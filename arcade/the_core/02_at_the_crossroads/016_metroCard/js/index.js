const metroCard = (lastNumberOfDays) => lastNumberOfDays === 31 ? [28,30,31] : [31];

module.exports = { fns: [ metroCard ] };
