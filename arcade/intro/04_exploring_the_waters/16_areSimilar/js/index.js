const areSimilar = (a,b) => {
  if (a.toString() === b.toString()) { return true }
  let c = [], d = [];
  a.forEach((item, idx) => {
    if (item !== b[idx]) {
      c.push(item);
      d.push(b[idx]);
    }
  })
  return c.length === 2 && (c.toString() === d.reverse().toString())
}

module.exports = { areSimilar };

// Notes
// if (a.length !== b.length) { return false }
// [a,b].forEach((arr, idx) => {
//   second = idx%2 === 0 ? b : a;
//   arr.forEach(item => {
//     if (second.indexOf(item) === -1) { return false }
//   })
// })
// // let truth = true;
// // check if they are already equal
// // for (let i = 0; i < a.length; i++) {
// //   if (a[i] !== b[i]) { truth = false; break; }
// // }
// // if (!truth) {
// //   for (let i = 0; i < 2; i++) {
// //     let first = i === 0 ? a : b;
// //     let second = i === 0 ? b : a;
// //     for (let j = 0; j < a.length-1; j++) {
// //       const copy = first;
// //       let slice = first;
// //       let itemOne = first[i];
// //       let itemTwo = first[i+1];
// //       slice[i] = itemTwo;
// //       slice[i+1] = itemOne;
// //       for (let k = 0; k <= first.length; k++) {
// //         if (k === first.length) { truth = true; break; }
// //         if (first[k] !== second[k]) { break; }
// //       }
// //       if (truth) { break }
// //       else { first = copy }
// //     }
// //   }
// // }
// return truth;
