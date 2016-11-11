'use strict';
function solve(arr) {
    let sideA = Number(arr[0]),
        sideB = Number(arr[1]);
    console.log(`${(sideA * sideB).toFixed(2)} \n${(2 * (sideA + sideB)).toFixed(2)}`)
}

//Test the code
// solve(['2.5','3.14']);