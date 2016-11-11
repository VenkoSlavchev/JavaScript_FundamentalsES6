'use strict';
function solve(arr) {
    let input = arr[0],
        wordToMatch = new RegExp(arr[1], 'gi');
    console.log(input.match(wordToMatch).length);

}
//Test the code
// solve(['How do you plan on achieving that? How? How can you even think of that?', 'how']);