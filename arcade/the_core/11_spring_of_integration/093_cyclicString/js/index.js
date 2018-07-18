const cyclicString = s => {
    let lowestLength = s.length;
    const substrings = allSubstrings(s);
    substrings.forEach(sub => {
        let concat = s.concat(sub);
        const cyclic = findCyclic(concat);
        if (cyclic) {
            if (cyclic.length < lowestLength) {
                lowestLength = cyclic.length;
            }
        }
    })
    return lowestLength;
}

const findCyclic = s => {
    let cyclics = [];
    for (let i = 0; i < s.length; i++) {
        let concat = (s + s.slice(0,i)).slice(i);
        for (let len = 1; len < concat.length; len++) {
            if (concat.length % len === 0) {
                let slice = concat.slice().split(''), divisions = [];
                while (slice.length > 0) {
                    let partition = [];
                    while (partition.length !== len) {
                        partition.push(slice.shift());
                    }
                    divisions.push(partition.join(''));
                }
                if (divisions.every(div => div === divisions[0])) {
                    cyclics.push(divisions[0]);
                }
            }
        }
    }
    cyclics = cyclics.filter(s => s.length > 0).sort((a,b)=> a.length < b.length ? 1 : -1);
    return cyclics.length > 0 ? cyclics[0] : false;
}

const allSubstrings = s => {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length; j++) {
            arr.push(s.slice(i,j));
        }
    }
    return arr;
}

module.exports = { fns: [ cyclicString ] };
