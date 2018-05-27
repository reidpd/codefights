const almostIncreasingSequence = seq => {
  // if (strictIncrease(seq)) { return true }
    // if (seq.length < 3) { return true }
    // for (let i = 0; i < seq.length; i++) {
    //     let copy = { val: seq[i], i };
    //     seq.splice(copy.i, 1);
    //     if (strictIncrease(seq)) { return true }
    //     else { seq.splice(copy.i, 0, copy.val) }
    // }
    // return false;
    let found = false;
    for (let i = 0; i < seq.length; i++) {
        if(seq[i] <= seq[i-1]) {
            if(found) { return false }
            found = true;

            if (i === 1 || i === seq.length - 1) {
                  continue;
            }
            else if (seq[i] > seq[i-2]) {
                  seq[i-1] = seq[i-2];
            }
            else if (seq[i-1] >= seq[i+1]) {
                  return false;
            }
        }
    }
    return true;
}

// const strictIncrease = (seq) => {
//     return seq.every((val, i, a) => {
//             let prev = a[i-1], now = a[i], next = a[i+1], len = a.length-1;
//             return (now < len) ? now < next : now > prev;
//         });
// }

module.exports = { almostIncreasingSequence }
