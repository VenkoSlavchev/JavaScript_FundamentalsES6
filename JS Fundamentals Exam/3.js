'use strict';
function solve(arr) {
    let specialKey = arr.shift();
    var newResultMatch = [];
    for (let i = 0; i < arr.length; i++) {
        let currentRow = arr[i];
        let x = new RegExp(specialKey, 'gi');
        currentRow = currentRow.replace(x, specialKey.toLowerCase());
        let specialKeyPattern = new RegExp('(?:[ |^]*)' + specialKey.toLowerCase() + '[ ]+([A-Z\%\$\#\!]{8,})(?=[ \.\,$]{1})', 'g');
        let match;
        while (match = specialKeyPattern.exec(currentRow)) {
            newResultMatch.push(match[1])
        }
    }
//console.log(results);
    for (let i = 0; i < arr.length; i++) {
        newResultMatch.forEach((val, key) => {
            arr[i] = arr[i].replace(val, encrypt(val));
            return arr[i];
        });
        console.log(arr[i]);
    }


    function encrypt(word) {
        word = word.split('');
        let result = '';
        for (let i = 0; i < word.length; i++) {
            if (word[i] === '!') {
                word[i] = word[i].replace(word[i], 1);
            } else if (word[i] === '%') {
                word[i] = word[i].replace(word[i], 2);
            } else if (word[i] === '#') {
                word[i] = word[i].replace(word[i], 3);
            } else if (word[i] === '$') {
                word[i] = 4;
            }
            else word[i] = word[i].toLowerCase();
        }
        word.forEach(x => result += x);
        return result;
    }

}
//Test the code
// solve([
//     'specialKey',
//     'In this text the specialKey HELLOWORLD! is correct, but',
//     'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
//     'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
//
// ]);

// solve([
//     'enCode',
//     'Some messages are just not encoded what can you do?',
//     'RE - ENCODE THEMNOW! - he said.',
//     'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
// ]);