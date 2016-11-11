'use strict';
function solve(arr) {
    let fileLocation = arr[0],
        alternativeText = arr[1];
    console.log(`<img src="${fileLocation}" alt="${alternativeText}">`);
}
//Test the code
// solve(['smiley.gif', 'Smiley Face']);