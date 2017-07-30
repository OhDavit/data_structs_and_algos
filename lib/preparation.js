"use strict";
let x = 3;


let result = 0;
for(let i = 1; i <= x; ++i) {
    result += calculateNumber2s(i);
}


console.log(result);

function calculateNumber2s(n) {
    let count = 0;
    while(n > 0) {
        count += n % 2;
        n = parseInt(n/2);
    }

    return count;
}

