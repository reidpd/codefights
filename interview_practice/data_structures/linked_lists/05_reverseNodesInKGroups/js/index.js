const reverseNodesInKGroups = (l,k) => {
  let new_l = [], sub_l = [];
  while (l !== null) {
    sub_l.push(l.value);
    if (sub_l.length === k) {
      new_l.push(...sub_l.reverse());
      sub_l = [];
    }
    l = l.next;
  }
  if (sub_l.length > 0) { new_l.push(...sub_l) }
  return new_l;
};

module.exports = { fns: [ reverseNodesInKGroups ] };
