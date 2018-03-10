const countBlackCells = (n, m) => {
   // Formula from: http://math.stackexchange.com/questions/1121541/number-of-unit-squares-that-meet-a-given-diagonal-line-segment-in-more-than-one
   // have to add (gcd(m,n)-1)*2 b/c codefight counts a point of intersection as the two squares that
   // meet on that point
   // formula --> m + n - gcd(m,n) + (gcd(m,n)-1)*2
   // now simplify it
   return m + n + gcd(m,n) - 2;
}

//greatest common divisor
function gcd(a, b){
    var limit = Math.max(a,b);
    var current_div = divisor = 1;
    while(current_div <= limit){
        ++current_div;
        if(a%current_div == 0 && b%current_div == 0)
            divisor = current_div;
    }
    return divisor;
}

module.exports = { fns: [ countBlackCells ] };
