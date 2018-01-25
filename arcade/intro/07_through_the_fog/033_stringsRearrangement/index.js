const stringsRearrangement = a => perm(a).some(combo => rearrangementWorks(combo));

const perm = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) { result.push(m) } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice(), next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }

  permute(inputArr);

  return result;
}

const rearrangementWorks = arr => {
  let bool = true;
  for (let i = 0; i < arr.length-1; i++) {
    let first = arr[i], second = arr[i+1];
    if (!onlyOneCharDiff(first, second)) { bool = false; break; }
  }
  return bool;
}

const onlyOneCharDiff = (first, second) => {
  let count = 0;
  first.split('').forEach((char, idx) => {
    if (char !== second[idx]) { count++ }
  });
  return count === 1;
}

const fns = [ perm, stringsRearrangement, rearrangementWorks, onlyOneCharDiff];

module.exports = { fns };
