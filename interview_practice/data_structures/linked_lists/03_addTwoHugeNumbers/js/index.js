const createListFromArray = require('../../00_basic/lists/single/js/index.js').createListFromArray;

const addTwoHugeNumbers = (a,b) => { // a && b === linked lists
  let num_lists = [a,b], total = 0;
  let big_num_strings = num_lists.map((list, i) => {
    let node = list, str = "";
    while (node !== null) {
      let n = node.value.toString();
      if (str.length !== 0) { n = n.padStart(4, '0') }
      str += n;
      node = node.next;
    }
    return str;
  });
  const max_length = Math.max(...big_num_strings.map(str => str.length));
  big_num_strings = big_num_strings.map(str => str.padStart(max_length, '0').split('').reverse());
  console.log(big_num_strings);
  for (let pad_len = 0; pad_len < max_length; pad_len++) {
    let digits = big_num_strings.map(n => n[pad_len].padEnd(pad_len+1, '0'));
    console.log(digits);
    // let rounded_below_tenkay = digits.map(n => {
    //   if (!n.includes('.')) { n += '.0' }
    //   while (n.split('.')[0].length > 4) {
    //     n = parseInt(n / 10).toString();
    //   }
    //   return n;
    // })
    // console.log('rounded_below_tenkay === ', rounded_below_tenkay);
    digits.forEach(n => total += parseInt(n, 10));
    console.log(total);
  }
  return total.toString().split('e');

};

module.exports = { fns: [ addTwoHugeNumbers ] };
