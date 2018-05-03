const mergeTwoLinkedLists = (l1, l2) => {
  let merge = [];
  while (true) {
    if (l1 === null && l2 === null) { break }
    if (l1 === null && l2 !== null) { merge.push(l2.value); l2 = l2.next; }
    else if (l1 !== null && l2 === null) { merge.push(l1.value); l1 = l1.next; }
    else {
      let next_value = Math.min(l1.value, l2.value);
      if (next_value === l1.value) {
        merge.push(l1.value);
        l1 = l1.next;
      } else if (next_value === l2.value) {
        merge.push(l2.value);
        l2 = l2.next;
      }
    }
  }
  return merge;
};

module.exports = { fns: [ mergeTwoLinkedLists ] };
