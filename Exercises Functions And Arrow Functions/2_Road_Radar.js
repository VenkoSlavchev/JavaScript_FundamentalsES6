'use strict';
function solve(arr) {
    let speed = +(arr[0]),
        area = arr[1],
        diffrence = 0;

    switch (area) {
        case 'city' :
            diffrence = -(50 - speed);
            break;
        case 'residential' :
            diffrence = -(20 - speed);
            break;
        case 'interstate' :
            diffrence = -(90 - speed);
            break;
        case 'motorway' :
            diffrence = -(130 - speed);
            break;
        default :
            break;
    }

    if (diffrence <= 20 && diffrence > 0) {
        console.log('speeding');
    } else if (diffrence > 20 && diffrence <= 40) {
        console.log('excessive speeding');
    } else if (diffrence > 40) {
        console.log('reckless driving');
    }
}
//Test the code
// solve(['0','motorway']);