'use strict';
function solve(arr) {
    let artistName = arr[0],
        trackName = arr[1],
        duration = arr[2];
    console.log(`Now Playing: ${trackName} - ${artistName} [${duration}]`);
}
//Test the code
// solve(['Number One', 'Nelly', '4:09']);