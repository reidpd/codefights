const decipher = cipher => {
    let initialStr = [], nums = [], ciph = cipher.split('');
    const parse = ints => parseInt(ints.join(''),10);
    while (ciph.length > 0) {
        nums.push(ciph.shift());
        if (96 < parse(nums) && parse(nums) < 123) {
            initialStr.push(String.fromCharCode(parse(nums)));
            nums = [];
        }
    }
    return initialStr.join('');
}

module.exports = { fns: [ decipher ] };
