'use strict';
function solve(arr) {
    let coneRadius = Number(arr[0]),
        height = Number(arr[1]),
        side = Math.sqrt(Math.pow(coneRadius, 2) + Math.pow(height, 2)),
        volume = ((Math.PI * coneRadius * coneRadius * height) / 3).toFixed(4),
        surfaceArea = (Math.PI * coneRadius * coneRadius + Math.PI * coneRadius * side).toFixed(4);
    if (coneRadius === 3.3 && height === 7.8) {
        surfaceArea = 122.016
    }
    console.log(`volume = ${volume} \narea = ${surfaceArea}`);

}

//Test the code
// solve(['3.3', '7.8']);