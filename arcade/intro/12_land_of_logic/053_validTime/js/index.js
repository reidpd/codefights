const validTime = time => time.split(':').every((portion, idx) => {
  let maxNum = idx === 0 ? 24 : 60;
  return parseInt(portion, 10) < maxNum;
});

module.exports = { fns: [ validTime ] };
