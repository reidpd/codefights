const reverseParentheses = s => {
    while (s.indexOf(')') !== -1) {
        let endBracketIdx = s.indexOf(')'), startBracketIdx;
        for (let i = endBracketIdx-1; i >= 0; i--) {
            if (s[i] === '(') { startBracketIdx = i; break; }
        }
        const bracketStr = s.slice(startBracketIdx+1, endBracketIdx);
        const prev = startBracketIdx > 0 ? s.slice(0, startBracketIdx) : '';
        const post = endBracketIdx < s.length-1 ? s.slice(endBracketIdx+1) : '';
        s = prev + bracketStr.split('').reverse().join('') + post;
    }
    return s;
}

module.exports = { reverseParentheses }
