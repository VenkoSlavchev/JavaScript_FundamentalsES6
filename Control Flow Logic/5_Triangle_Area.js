'use strict';
function solve(arr) {
    let sideA = Number(arr[0]);
    let sideB = Number(arr[1]);
    let sideC = Number(arr[2]);
    let perimeter = (sideA + sideB + sideC) / 2;
    console.log(Math.sqrt(perimeter * (perimeter - sideA) * (perimeter - sideB) * (perimeter - sideC)));
}
//Test the code
// solve(['2','3.5','4']);