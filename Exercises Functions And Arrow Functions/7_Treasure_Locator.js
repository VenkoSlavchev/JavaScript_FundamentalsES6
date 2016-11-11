"use strict";
function solve(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        let x = arr[i],
            y = arr[i + 1];
        console.log(checkForTreasure(x, y));
    }


    function checkForTreasure(x0, y0) {
        if (x0 >= 8 && x0 <= 9 && y0 >= 0 && y0 <= 1) {
            return 'Tokelau';
        } else if (x0 >= 1 && x0 <= 3 && y0 >= 1 && y0 <= 3) {
            return 'Tuvalu';
        } else if (x0 >= 5 && x0 <= 7 && y0 >= 3 && y0 <= 6) {
            return 'Samoa';
        } else if (x0 >= 0 && x0 <= 2 && y0 >= 6 && y0 <= 8) {
            return 'Tonga';
        } else if (x0 >= 4 && x0 <= 9 && y0 >= 7 && y0 <= 8) {
            return 'Cook';
        } else {
            return 'On the bottom of the ocean';
        }
    }
}
//Test the code
// solve(['4','2','1.5','6.5','1','3']);