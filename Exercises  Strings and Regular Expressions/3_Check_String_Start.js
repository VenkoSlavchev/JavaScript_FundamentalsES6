'use strict';
function solve(arr) {
    let inputString = arr[0],
        substringToCheck = arr[1],
        match = inputString.match(`^${substringToCheck}`);
    console.log(match !== null);

}
//Test the code
// solve(['Marketing Fundamentals, starting 19/10/2016','Marketing']);