'use strict';
function solve(arr) {
    let numberOfRotations = +(arr.splice([arr.length - 1], 1));
    for (let i = 0; i < numberOfRotations % 4; i++) {
        let lastElement = (arr.splice(arr.length - 1, 1)).toString();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '));

}
//Test the code
// solve(['Banana','Orange','Coconut','Apple','15']);