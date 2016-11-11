'use strict';
function solve(arr) {
    let x1Coordinate = +(arr[0]),
        y1Coordinate = +(arr[1]),
        x2Coordinate = +(arr[2]),
        y2Coordinate = +(arr[3]);

    calculateIfDistanceIsIntegerNumber(x1Coordinate, y1Coordinate, 0, 0) ? console.log(`{${x1Coordinate}, ${y1Coordinate}} to {0, 0} is valid`) :
        console.log(`{${x1Coordinate}, ${y1Coordinate}} to {0, 0} is invalid`);
    calculateIfDistanceIsIntegerNumber(x2Coordinate, y2Coordinate, 0, 0) ? console.log(`{${x2Coordinate}, ${y2Coordinate}} to {0, 0} is valid`) :
        console.log(`{${x2Coordinate}, ${y2Coordinate}} to {0, 0} is invalid`);
    calculateIfDistanceIsIntegerNumber(x1Coordinate, y1Coordinate, x2Coordinate, y2Coordinate) ? console.log(`{${x1Coordinate}, ${y1Coordinate}} to {${x2Coordinate}, ${y2Coordinate}} is valid`) :
        console.log(`{${x1Coordinate}, ${y1Coordinate}} to {${x2Coordinate}, ${y2Coordinate}} is invalid`);


    function calculateIfDistanceIsIntegerNumber(x0, y0, x1, y1) {

        if ((Math.sqrt((Math.pow((x1 - x0), 2)) + (Math.pow((y1 - y0), 2)))) % 1 == 0) {
            return true;
        } else {
            return false;
        }
    }
}
//Test the code
// solve(['2','1','1','1']);