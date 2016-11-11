'use strict';
function solve(arr) {
    let units = Number(arr[0]),
        simpleArithmetics = Math.abs(Math.floor(units / 12));
    console.log(`${simpleArithmetics}'-${units % 12}"`);
}
//Test the code
// solve(['11']);