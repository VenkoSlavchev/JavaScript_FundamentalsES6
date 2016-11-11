'use strict';
function solve(arr) {
    let speedAInMetersPerSecond = Number(arr[0]) / 3.6,
        speedBInMetersPerSecond = Number(arr[1]) / 3.6,
        travelTime = Number(arr[2]),
        distanceA = speedAInMetersPerSecond * travelTime,
        distanceB = speedBInMetersPerSecond * travelTime;
    // console.log(distanceA);
    // console.log(distanceB);

    distanceA >= distanceB ? console.log(distanceA - distanceB) : console.log(distanceB - distanceA);
}
//Test the code
// solve(['11', '10', '120']);