const stolenLunch = note => {
    return note.split('').map(char => translate(char)).join('');
}

const translate = char => {
    const alph = new Array(10).fill(0).map((x,i)=>String.fromCharCode(97+i));
    if (isNaN(parseInt(char,10))) {
        const idxOf = alph.indexOf(char);
        return idxOf > -1 ? idxOf.toString(): char;
    } else {
        return alph[char];
    }
}

module.exports = { fns: [ stolenLunch ] };
