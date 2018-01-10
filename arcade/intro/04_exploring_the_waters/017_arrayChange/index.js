const arrayChange = input => {
  let x = 0;
  for (let i = 1; i < input.length; i++) {
    while (input[i] <= input[i-1]) {
      input[i]++; x++;
    }
  }
  return x;
}

module.exports = { arrayChange }
