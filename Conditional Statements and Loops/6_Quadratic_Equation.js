'use strict';
function solve(arr) {
    let a = +(arr[0]),
        b = +(arr[1]),
        c = +(arr[2]),
        discriminant = ((b * b) - (4 * a * c));
    if (discriminant < 0) {
        console.log('No');
    } else if (discriminant === 0) {
        console.log(-b / (2 * a));
    } else {
        let firstOutput = (-b + Math.sqrt(discriminant)) / (2 * a),
            secondOutput = (-b - Math.sqrt(discriminant)) / (2 * a);
        firstOutput < secondOutput ? console.log(`${firstOutput}\n${secondOutput}`) : console.log(`${secondOutput}\n${firstOutput}`);

    }

}
//Test the code
//solve(['6','11','-35']);