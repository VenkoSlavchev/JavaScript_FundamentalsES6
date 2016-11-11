'use strict';
function solve(arr) {
    let inputString = arr[0],
        substringToCheck = arr[1];
    if (inputString.indexOf(substringToCheck) === -1) {
        console.log('false');
    } else {
        console.log('true');
    }
}
//Test the code
// solve(['This sentence ends with fun?','fun?']);