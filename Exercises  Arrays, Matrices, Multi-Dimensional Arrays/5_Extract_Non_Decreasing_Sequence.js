'use strict';
function solve(arr) {
    let numbers = arr.map(Number),
        resultArray = [],
        biggestNum = Number.NEGATIVE_INFINITY;
    numbers.forEach(function (x) {
        if (x > biggestNum) {
            resultArray.push(x);
            biggestNum = x;
            console.log(x);
        }
    })

}
//Test the code
// solve(['10','3','8','4','10','12','3','2','24']);