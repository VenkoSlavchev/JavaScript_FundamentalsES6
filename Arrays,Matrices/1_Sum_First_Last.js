'use strict';
function solve(arr) {
    let numbers = arr.map(Number);
    console.log(numbers[0] + numbers[numbers.length - 1]);
}
//Test the code
// solve(['20','30','40']);