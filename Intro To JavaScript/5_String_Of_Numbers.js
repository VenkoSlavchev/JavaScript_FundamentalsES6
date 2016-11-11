'use strict';
function solve(arr) {
    let number = Number.parseInt(arr[0]);
    let numbersString = '';
    for (let count = 1; count <= number; count++) {
        numbersString += count;
    }
    console.log(numbersString);
}
//Test the code
// solve(['0']);