const addBorder = picture => {
  const newPic = picture.map(str => "*" + str + "*");
  let bookEnd = "";
  for (let i = 0; i < newPic[0].length; i++) { bookEnd += "*" }
  newPic.unshift(bookEnd)
  newPic.push(bookEnd)
  return newPic;
}

module.exports = { addBorder }
