'use strict';
function solve(arr) {
    let number = +(arr[0]) || 5;
    for (let countStars = 1; countStars <= number; countStars++) {
        console.log(`${'* '.repeat(number - 1)}${'*'.repeat(1)}`);
    }
}
//Test the code
// solve(['']);