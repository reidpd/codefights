const digitsProduct(product) {
    var answerDigits = [],
        answer = 0;
    if (!product) {
        return 10;
    }
    if (product === 1) {
        return 1;
    }
    for (var divisor = 9; divisor > 1; divisor--) {
        while (product % divisor === 0) {
            product /= divisor;
            answerDigits.push(divisor);
        }
    }
    if (product > 1) {
        return -1;
    }
    for (var i = answerDigits.length - 1; i >= 0; i--) {
        answer = answer + answerDigits[i] * Math.pow(10, i);
    }
    return answer;
}

const digitsProductBetterVersion = product => {
  if (product === 1) { return 1 }
  else if (isPrime(product)) { return -1 }

  let correctProductFound = false, digits = ["9", "9"];
  if (productFromNewDigits())
  while (!correctProductFound) {
    digits = cycleDigits(digits);
    const productFromNewDigits = calculateProductFromDigits(digits);
    correctProductFound = productFromNewDigits === product;
  }

  return parseInt(digits.join(''));
};

const isPrime = n => {
  if (n === 0) return false;
  const nums = new Array(n).fill(0).map((n, i) => n + i).slice(2);
  return nums.slice(0,nums.length/2).every(num => n % num !== 0);
}

const cycleDigits = arr => {
  let nextNum = parseInt(arr.join('')) + 1;
  return nextNum.toString().split('').map(n => parseInt(n));
}

const calculateProductFromDigits = digits => digits.reduce((acc, val) => acc * val, 1);

module.exports = { fns: [ digitsProductBetterVersion, isPrime, cycleDigits, calculateProductFromDigits, digitsProduct ] };
