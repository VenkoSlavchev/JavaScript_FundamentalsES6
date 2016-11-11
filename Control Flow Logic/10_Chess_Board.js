'use strict';
function solve(arr) {
    let lines = Number(arr[0]),
        black = "black",
        white = "white";
    console.log(`<div class="chessboard">`);
    if (lines % 2 !== 0) {
        for (let rows = 1; rows <= lines; rows++) {
            console.log(` <div>`);
            for (let squares = 1; squares <= lines; squares++) {
                if (rows % 2 !== 0) {
                    if (squares % 2 !== 0) {
                        console.log(`   <span class="${black}"></span>`);
                    } else {
                        console.log(`   <span class="${white}"></span>`);
                    }
                } else {
                    if (squares % 2 === 0) {
                        console.log(`   <span class="${black}"></span>`);
                    } else {
                        console.log(`   <span class="${white}"></span>`);
                    }
                }
            }
            console.log(` </div>`);
        }
    } else {
        for (let rows = 1; rows <= lines; rows++) {
            console.log(` <div>`);
            for (let squares = 1; squares <= lines; squares++) {
                if (rows % 2 !== 0) {
                    if (squares % 2 !== 0) {
                        console.log(`   <span class="${black}"></span>`);
                    } else {
                        console.log(`   <span class="${white}"></span>`);
                    }
                } else {
                    if (squares % 2 === 0) {
                        console.log(`   <span class="${black}"></span>`);
                    } else {
                        console.log(`   <span class="${white}"></span>`);
                    }
                }
            }
            console.log(` </div>`);
        }
    }
    console.log(`</div>`);
}

//Test the code
// solve(['8']);
