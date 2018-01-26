const longestDigitsPrefix = inputString => {
  let prefix = [], split = inputString.split('');
  while (!isNaN(parseInt(split[0]))) prefix.push(split.shift());
  return prefix.join('');
};

module.exports = { fns: [ longestDigitsPrefix ] };
