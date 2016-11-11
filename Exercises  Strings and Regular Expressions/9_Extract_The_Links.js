'use strict';
function solve(arr) {
    let arrayOfMatches = [];

    arr.map(x => {
        if (x.match(/w{3}\.[a-zA-Z\d-]+(\.{1}[a-z]{2,})+/g) !== null) {
            arrayOfMatches.push(x.match(/w{3}\.[a-zA-Z\d-]+(\.{1}[a-z]{2,})+/g));
        }

    });
    console.log(arrayOfMatches.join('\n'));
}
//Test the code
// solve(['Join WebStars now for free, at www.web-stars.com',
// 'You can also support our partners:',
//     'Internet - www.internet.com',
// 'WebSpiders - www.webspiders101.com',
// 'Sentinel - www.sentinel.-ko'
// ]);