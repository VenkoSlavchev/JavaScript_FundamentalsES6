'use strict';
function solve(arr) {
    let number = Number(arr[0]);
    if (number % 1 !== 0) {
        return console.log('invalid');
    } else if (number % 2 === 0) {
        return console.log('even');
    } else {
        console.log('odd');
    }
}
//Test the code
// solve(['16.3165516']);