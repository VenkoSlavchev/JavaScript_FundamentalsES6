"use strict";
function solve(arr) {
    let stars = +(arr[0]);
    for (let upCount = 1; upCount <= stars; upCount++) {
        console.log('*'.repeat(upCount));
    }
    for (let downCount = stars - 1; downCount > 0; downCount--) {
        console.log('*'.repeat(downCount));
    }

}
//Test the code
// solve(['5']);