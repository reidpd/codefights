const pairOfShoes = shoes => {
    const sizes = shoes.slice().map(shoe => shoe[1]).filter((size,i,arr) => arr.indexOf(size) === i);
    return sizes.every(size => {
        const shoesOfThisSize = shoes.slice().filter(shoe => shoe[1] === size);
        const leftShoes = shoesOfThisSize.filter(shoe => shoe[0] === 0);
        const rightShoes = shoesOfThisSize.filter(shoe => shoe[0] === 1);
        return leftShoes.length === rightShoes.length;
    });
}

module.exports = { fns: [ pairOfShoes ] };
