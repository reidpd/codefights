const isUnstablePair = (filename1, filename2) => {
  let i = 0;
  while (filename1[i] && filename2[i] && filename1[i] === filename2[i]) { i++ }
  if (!filename1[i] || !filename2[i]) { return false; }
  console.log('i === ', i, 'iGreater? === ', i <= filename1.length && i <= filename2.length);
  const pair = [filename1, filename2];
  const sliced = pair.map(file => file.slice(i));
  console.log('sliced === ', sliced);
  return sliced[0][i].toLocaleLowerCase() > sliced[1][i] && sliced[0][i].toLocaleUpperCase() > sliced[1][i];
};

const letterIsUC = letter => letter === letter.toUpperCase();

const make_cp_maps = str => str.split('').map((char,i) => str.charCodeAt(i));

module.exports = { fns: [ isUnstablePair ] };
