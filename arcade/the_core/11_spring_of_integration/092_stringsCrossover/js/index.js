const stringsCrossover = (inputArray, result) => {
    let count = 0;
    const perms = gatherPerms(inputArray);
    console.log(perms)
    perms.forEach(pair => {
        let s1 = pair[0], s2 = pair[1];
        if (crossoverIsPossible(result,s1,s2)) {
            count++;
        }
    })
    return count;
}

const crossoverIsPossible = (res,a,b) => {
    const equalLengths = [a,b].every(s => s.length === res.length);
    return equalLengths && res.split('').every((char,i)=> {
        return [a,b].some(s => s[i] === char);
    });
}

const gatherPerms = inputArray => {
    const outputArray = [];
    for (let i = 0; i < inputArray.length-1; i++) {
        let str1 = inputArray[i];
        for (let j = i+1; j < inputArray.length; j++) {
            let str2 = inputArray[j];
            outputArray.push([str1, str2]);
        }
    }
    return outputArray;
}

module.exports = { fns: [ stringsCrossover ] };
