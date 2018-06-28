const addBorder = picture => {
  const line = new Array(picture[0].length).fill('*').join('');
  picture.unshift(line); picture.push(line);
  return picture.map(str => {
    str = str.split('');
    str.unshift('*'); str.push('*');
    return str.join('');
  });
};

module.exports = { fns: [ addBorder ] };
