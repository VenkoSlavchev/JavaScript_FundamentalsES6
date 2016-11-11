'use strict';
function solve(arr) {
    let kNumber = +(arr[0]),
        resultFromBegining = [],
        resultFromEnd = [];
    for (let j = 1, l = arr.length - kNumber; j <= kNumber; j++, l++) {
        resultFromBegining.push(+(arr[j]));
        resultFromEnd.push(+(arr[l]));
    }

    console.log(`${resultFromBegining.join(' ')}\n${resultFromEnd.join(' ')}`);
}
//Test the code
//solve(['3', '6', '7', '8', '9']);