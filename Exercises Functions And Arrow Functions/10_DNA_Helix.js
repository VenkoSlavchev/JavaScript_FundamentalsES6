'use strict';
function solve(arr) {
    let number = +(arr[0]),
        dnaSequence = 'ATCGTTAGGG',
        dnaArray = [],
        stringDNA = '';
    for (let i = 0, j = 9; i < number * 2; i++) {
        if (i == j) {
            dnaSequence += dnaSequence;
            j += 9;
        }
        dnaArray.push(dnaSequence[i]);
    }

    for (let i = 0, j = 0, k = 0; i < number; i++, j += 2, k++) {
        if (k == 0) {
            stringDNA += `**${dnaArray[j]}${dnaArray[j + 1]}**\n`;
        } else if (k == 1) {
            stringDNA += `*${dnaArray[j]}--${dnaArray[j + 1]}*\n`;
        } else if (k == 2) {
            stringDNA += `${dnaArray[j]}----${dnaArray[j + 1]}\n`;
        } else if (k == 3) {
            stringDNA += `*${dnaArray[j]}--${dnaArray[j + 1]}*\n`;
        } else if (k == 4) {
            stringDNA += `**${dnaArray[j]}${dnaArray[j + 1]}**\n`;
            k = 0;
        }
    }
    console.log(stringDNA);
}
//Test the code
// solve(['10']);