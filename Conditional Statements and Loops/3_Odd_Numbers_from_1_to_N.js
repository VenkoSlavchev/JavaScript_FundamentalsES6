'use strict';
function solve(arr) {
    let number = +(arr[0]);
    for (let counter = 1; counter <= number; counter++) {
        if (counter % 2 !== 0) {
            console.log(counter);
        }
    }
}
//Test the code
// solve([7]);