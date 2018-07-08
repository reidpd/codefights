const cipher26 = message => {
  const alphabet = new Array(26).fill(0).map((int,i)=>String.fromCharCode(97+i));
  message = message.split('');
  let nums = [alphabet.indexOf(message.shift())];
  while (message.length > 0) {
    let lastNum = 0, desiredModulo = alphabet.indexOf(message.shift());
    while ((sum(nums, lastNum) % 26) !== desiredModulo) { lastNum++ }
    nums.push(lastNum);
  }
  return nums.map(int => alphabet[int]).join('');
}

const sum = (arr, lastNum) => arr.reduce((acc,cv)=>acc+cv) + lastNum;

module.exports = { fns: [ cipher26 ] };

// let alphabet = new Array(26).fill(0).map((int,i)=>String.fromCharCode(97+i));
    // let total = 0, decryptedMessage = [];
    // message.split('').forEach((char, idx) => {
    //     console.log('cc === ', alphabet.indexOf(char), ', total === ', total);
    //     total += alphabet.indexOf(char);
    //     decryptedMessage.push(alphabet[total%26]);
    //     console.log('decryptedMessage === ', decryptedMessage)
    // });
    // console.log(decryptedMessage);
    // return decryptedMessage.join('');
