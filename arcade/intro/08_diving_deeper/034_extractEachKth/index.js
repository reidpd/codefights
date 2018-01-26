const extractEachKth = (inputArray, k) => inputArray.filter((item, idx) => (idx+1) % k !== 0);

module.exports = { extractEachKth };
