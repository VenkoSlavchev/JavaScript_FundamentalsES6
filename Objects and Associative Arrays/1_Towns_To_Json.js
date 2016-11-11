'use strict';
function solve(arr) {
    let input = arr.map(x => x.split('|').filter(x => x.trim())),
        sofiaObj = {},
        beijingObj = {},
        resultArray = [];
    sofiaObj[input[0][0].trim()] = input[1][0].trim();
    beijingObj[input[0][0].trim()] = input[2][0].trim();
    sofiaObj[input[0][1].trim()] = +input[1][1].trim();
    beijingObj[input[0][1].trim()] = +input[2][1].trim();
    sofiaObj[input[0][2].trim()] = +input[1][2].trim();
    beijingObj[input[0][2].trim()] = +input[2][2].trim();
    resultArray.push(sofiaObj);
    resultArray.push(beijingObj);
    console.log(JSON.stringify(resultArray));
}
//Test the code
// solve(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |'
// ]);