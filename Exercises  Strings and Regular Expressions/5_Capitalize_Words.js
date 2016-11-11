'use strict';
function solve (arr){
    let inputString = arr[0];
    let outputString = inputString.replace(/[A-Za-z]+/g, letter => {
        for (let i = 0; i < letter.length; i++) {
            if (i == 0) {
                letter = letter.replace(letter[i], letter[i].toUpperCase());
            } else {
                letter = letter.replace(letter[i], letter[i].toLowerCase());
            }
        }
        return letter;
    });
        
        console.log(outputString);
}
//Test the code
// solve(['Capitalize these words']);