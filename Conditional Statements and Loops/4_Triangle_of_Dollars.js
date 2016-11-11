'use strict';
function solve(arr) {
    let lines = +(arr[0]);
    for (let counter = 1; counter <= lines; counter++) {
        console.log('$'.repeat(counter));
    }
}
//Test the code
//solve(['5']);