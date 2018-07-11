const higherVersion = (ver1, ver2) => {
    const versions = [ver1,ver2].map(ver => ver.split('.').map(str => parseInt(str, 10)));
    let v1 = versions[0], v2 = versions[1];
    for (let i = 0; i < v1.length; i++) {
        if (v1[i] !== v2[i]) {
            return v1[i] > v2[i];
        }
    }
    return false;
}


module.exports = { fns: [ higherVersion ] };
