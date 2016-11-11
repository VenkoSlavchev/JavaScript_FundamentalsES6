'use strict';
function solve(arr) {
    let sorted = arr;

    sorted = arr.sort(function (a, b) {
        let wordA = a.toLowerCase(),
            wordB = b.toLowerCase();
        if (wordA.length === wordB.length) {
            return wordA > wordB;
        }
        return wordA.length - wordB.length
    });


    sorted.forEach(x => console.log(x));
}
//Test the code
// solve(['test','Deny','omen','Default']);