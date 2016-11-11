'use strict';
function solve(arr) {
    let numberOfBottles = Number(arr[0]);
    let capacityOfBox = Number(arr[1]);
    if (numberOfBottles <= capacityOfBox) {
        return console.log(1);
    } else if ((numberOfBottles % capacityOfBox) === 0) {
        return console.log(numberOfBottles / capacityOfBox);
    } else if ((numberOfBottles % capacityOfBox) > 0) {
        return console.log(Math.floor((numberOfBottles / capacityOfBox) + 1));
    }

}
//Test the code
// solve(['99', '10'])