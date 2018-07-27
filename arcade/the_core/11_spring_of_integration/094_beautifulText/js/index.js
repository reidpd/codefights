const beautifulText = (inputString, l, r) => {
    const words = inputString.split(' ');
    for (let width = l; width <= r; width++) {
        let multiline = [], wordsSlice = words.slice(), broken = false;
        while (wordsSlice.length > 0) {
            const newLine = [];
            while (newLine.join(' ').length < width && wordsSlice.length > 0) {
                newLine.push(wordsSlice.shift())
            }
            if (newLine.join(' ').length > width) { broken = true; break; }
            else { multiline.push(newLine.join(' ')) }
        }
        if (!broken && multiline.every(line => line.split('').length === width)) {
            return true;
        }
    }
    return false;
}

module.exports = { fns: [ funcName ] };
