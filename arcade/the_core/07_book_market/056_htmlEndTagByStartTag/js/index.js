const htmlEndTagByStartTag = startTag => {
  const noAttributes = startTag.indexOf(' ') === -1;
  const tag = noAttributes ? startTag.slice(1,startTag.indexOf('>')) : startTag.slice(1,startTag.indexOf(' '));
  return "</" + tag + ">";
};

module.exports = { fns: [ htmlEndTagByStartTag ] };
