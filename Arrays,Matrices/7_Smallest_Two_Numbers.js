'use strict';
function solve(arr) {
    let numbers = arr.map(Number).sort((a, b) => a - b);
    console.log(`${numbers[0]} ${numbers[1]}`);

}
//Test the code
//solve(['30', '15', '50', '5']);