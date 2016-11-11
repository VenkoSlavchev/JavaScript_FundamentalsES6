'use strict';
function solve(arr) {
    let inputString = arr.map(sentence => {
        let listOfRegex = [/\*\b[A-Z]{1}[a-z]*(?=\s || \.)/g, /\+[0-9-]{10}(?=\s || \.)/g, /\![A-Za-z0-9]+(?=\s || \.)/g, /\_[A-Za-z0-9]+(?=\s || \.)/g];
        for (let numOfReplacements = 0; numOfReplacements < 4; numOfReplacements++) {
            sentence = sentence.replace(listOfRegex[numOfReplacements], foundMatch => {
                for (let char = 0; char < foundMatch.length; char++) {
                    foundMatch = foundMatch.replace(foundMatch[char], '|')
                }
                return foundMatch;
            });
        }
        return sentence;
    });
    console.log(inputString);
}
//Test the code
// solve(['Agent *Ivankov was in the room when it all happened',
//     'The person in the room was heavily armed.Agent *Ivankov had to act quick in order.',
//     'He picked up his phone and called some unknown number.',
//     'I think it was +555-49-796',
//     'I can\'t really remember...',
//     'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
//     'Then after that he disappeared from my sight.',
//     'As if he vanished in the shadows.',
//     'A moment, shorter than a second, later, I saw the person flying off the top floor.',
//     'I really don\'t know what happened there.',
//     'This is all I saw, that night.',
//     'I cannot explain it myself...'
// ]);