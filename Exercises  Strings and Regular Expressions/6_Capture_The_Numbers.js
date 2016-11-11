'use strict';
function solve(arr) {
    let input = arr.map(x => x.match(/\d+/g));

    console.log(input.join(' ').replace(/,|\s+/g, ' '));
}
//Test the code
// solve(['123a456',
//     '789b987',
//         '654c321',
//     '0'
// ]);




