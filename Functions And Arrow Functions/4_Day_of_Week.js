'use strict';
function solve(arr) {
    let day = arr[0],
        days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        isDay = false;
    for (let someday of days) {
        if (someday === day) {
            console.log(days.indexOf(someday) + 1);
            isDay = true;
            break;
        }
    }
    if (!isDay) {
        console.log('error');
    }
}
//Test the code
// solve(['Saturday']);