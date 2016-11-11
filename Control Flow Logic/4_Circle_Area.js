'use strict';
function solve(arr) {
    let radius = arr[0],
        area = Math.PI * radius * radius;
    console.log(`${area}\n${area.toFixed(2)}`);
}

//Test the code
// solve(['5']);