const adjacentElements = inputArray => {
  const products = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
      products.push(inputArray[i] * inputArray[i+1]);
  }
  return products.sort((a,b) => a < b)[0];
}

module.exports = { adjacentElements }
