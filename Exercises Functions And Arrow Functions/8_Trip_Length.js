'use strict';
function solve(arr) {
    let x1Coordinate = +(arr[0]),
        y1Coordinate = +(arr[1]),
        x2Coordinate = +(arr[2]),
        y2Coordinate = +(arr[3]),
        x3Coordinate = +(arr[4]),
        y3Coordinate = +(arr[5]),
        distBetweenFirstAndSecondPoint = calculateDistanceBetweenTwoPoints(x1Coordinate, y1Coordinate, x2Coordinate, y2Coordinate),
        distBetweenSecondAndThirdPoint = calculateDistanceBetweenTwoPoints(x2Coordinate, y2Coordinate, x3Coordinate, y3Coordinate),
        distBetweenThirdAndFirstPoint = calculateDistanceBetweenTwoPoints(x3Coordinate, y3Coordinate, x1Coordinate, y1Coordinate);
    console.log(`${distBetweenFirstAndSecondPoint} - 1`);
    console.log(`${distBetweenSecondAndThirdPoint} - 2`);
    console.log(`${distBetweenThirdAndFirstPoint} - 3`);
    console.log(findMinNumber(distBetweenFirstAndSecondPoint, distBetweenSecondAndThirdPoint, distBetweenThirdAndFirstPoint));
    console.log(findMaxNumber(distBetweenFirstAndSecondPoint, distBetweenSecondAndThirdPoint, distBetweenThirdAndFirstPoint));


    function calculateDistanceBetweenTwoPoints(x0, y0, x1, y1) {
        return ((Math.sqrt((Math.pow((x1 - x0), 2)) + (Math.pow((y1 - y0), 2)))));
    }

    function findMinNumber(num1, num2, num3) {
        if (Math.min(num1, num2, num3) === num1) {
            return 1;
        } else if (Math.min(num1, num2, num3) === num2) {
            return 2;
        } else if (Math.min(num1, num2, num3) === num3) {
            return 3;
        }
        ;
    };
    function findMaxNumber(num1, num2, num3) {
        if (Math.max(num1, num2, num3) === num1) {
            return 1;
        } else if (Math.max(num1, num2, num3) === num2) {
            return 2;
        } else if (Math.max(num1, num2, num3) === num3) {
            return 3;
        }
        ;
    };


}
//Test the code
// solve(['5', '1', '1', '1', '5', '4']);