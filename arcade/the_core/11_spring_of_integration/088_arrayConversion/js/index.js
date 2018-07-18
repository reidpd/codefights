const arrayConversion = inputArray => {
    let i = 0;
    while (inputArray.length > 1) {
        inputArray = i++ % 2 === 0 ? replace(inputArray, 'sum') : replace(inputArray, 'product');
    }
    return inputArray[0];
}

const replace = (arr, method) => {
    const newArr = [];
    const obj = separateByModulo(arr);
    for (let i = 0; i < obj.even.length; i++) {
        if (method === 'sum') { newArr.push(sum(obj,i)); }
        else if (method === 'product') { newArr.push(product(obj,i)); }
    }
    return newArr;
}

const sum = (obj, i) => obj.even[i] + obj.odd[i];
const product = (obj, i) => obj.even[i] * obj.odd[i];

const separateByModulo = arr => {
    let even = [], odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return { even, odd };
}

module.exports = { fns: [ arrayConversion ] };
