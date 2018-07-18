const arrayPreviousLess = items => {
    const slice = items.slice();
    for (let i = 0; i < items.length; i++) {
        let lesserItemValue = -1;
        for (let j = i-1; j > -1; j--) {
            if (items[j] < items[i] && items[j] !== -1) {
                lesserItemValue = items[j];
                break;
            }
        }
        slice[i] = lesserItemValue;
    }
    return slice;
}


module.exports = { fns: [ funcName ] };
