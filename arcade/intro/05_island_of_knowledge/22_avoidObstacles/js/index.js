const avoidObstacles = inputArray => {
  let course = Array.from(Array(81).keys()), jump = 1, foundAnswer = false;
  inputArray.forEach(idx => course[idx] = 'obstacle');
  while (!foundAnswer) {
    for (let i = 0; i < course.length; i += jump) {
      if (course[i] === 'obstacle') { jump++; break; }
      if (i > course.lastIndexOf('obstacle')) { foundAnswer = true; break; }
    }
  }
  return jump;
}

module.exports = { avoidObstacles }
