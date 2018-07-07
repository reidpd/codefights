const adaNumber = line => {
  line = line.split('').filter(char => char !== '_').join('');
  console.log(line);
  return followsRepOne(line) || followsRepTwo(line);
};

const followsRepOne = line => {
  return line.length > 0 && line.split('').every(char => !isNaN(char));
};

const followsRepTwo = line => {
  const parts = line.split('#');
  if (parts.length === 3 && parts[parts.length-1] === '') {
    let base = parseInt(parts[0]), int_str = parts[1];
    if (!isNaN(base) && base > 1 && base < 17 && int_str.length > 0) {
      let parsedInt = parseInt(int_str, base);
      console.log(parsedInt);
      return base.toString().split('').every(digit => parsedInt.toString().split('').indexOf(digit) !== -1);
    } else { return false }
  } else { return false }
  return true;
}

const validDigits = (char, idx, arr) => {
  const acceptableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];
};

module.exports = { fns: [ adaNumber ] };
