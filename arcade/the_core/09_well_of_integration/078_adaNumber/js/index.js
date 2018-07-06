const adaNumber = line => {
  line = line.filter(char => char !== '_');
  console.log(line);
  return followsRepOne(line) || followsRepTwo(line);
};

const followsRepOne = line => {
  return line.length > 0 && line.split('').every(char => !isNaN(char));
};

const followsRepTwo = line => {
  for (let i = 2)
  return false;
}

module.exports = { fns: [ adaNumber ] };
