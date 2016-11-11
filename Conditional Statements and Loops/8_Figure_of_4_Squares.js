'use strict';
function solve(arr) {
    let input = +(arr[0]),
        lineCharacters = 0,
        string = '',
        rows = 0;

    if (input % 2 == 0) {
        rows = input - 1;
    } else {
        rows = input;
    }
    lineCharacters = (2 * input) - 1;

    for (let i = 0; i < rows; i++) {
        if (rows <= 4) {
            string += `+${'-'.repeat((lineCharacters - 3) / 2)}+${'-'.repeat((lineCharacters - 3) / 2)}+\n`;
        } else if (rows > 4) {
            if (i === 0 || i === rows - 1 || i === Math.floor(rows / 2)) {
                string += `+${'-'.repeat((lineCharacters - 3) / 2)}+${'-'.repeat((lineCharacters - 3) / 2)}+\n`;
            } else {
                string += `|${' '.repeat((lineCharacters - 3) / 2)}|${' '.repeat((lineCharacters - 3) / 2)}|\n`;

            }
        }

    }
    console.log(string)

}//Test the code
//solve(['9']);