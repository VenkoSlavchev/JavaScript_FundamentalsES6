'use strict';
function solve(arr) {
    let numbers = [];
    for (let obj in arr) {
        if ((obj == 0) || (obj % 2 == 0)) {
            numbers.push((arr[obj]));
        }
    }

    console.log(numbers.join(' '));
}
//Test the code
//solve(['20','30','40']);