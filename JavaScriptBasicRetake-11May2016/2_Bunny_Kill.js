'use strict';
function solve(arr) {
    let bombs = arr.pop().split(' ');
    let matrix = [],
        snowBallDamage = 0,
        snowBallKills = 0;

    function isInMatrix(matrix, row, col) {
        if ((row >= 0 && row < matrix.length) && (col >= 0 && col < matrix.length)) {
            return true
        } else {
            return false
        }
    }

    function explode(matrix, bombRow, bombColumn, bombDamage) {
        for (let row = bombRow - 1; row <= bombRow + 1; row++) {
            for (let col = bombColumn - 1; col <= bombColumn + 1; col++) {
                if (isInMatrix(matrix, row, col)) {
                    matrix[row][col] -= bombDamage;
                }
            }
        }
        return matrix;
    }

    for (let i = 0; i < arr.length; i++) {
        let currentRow = arr[i].split(' ').map(x => Number(x));
        matrix.push(currentRow);
    }

    for (let i = 0; i < bombs.length; i++) {
        let bomb = bombs[i].split(',').map(x => Number(x)),
            bombRow = bomb[0],
            bombCol = bomb[1],
            bombDamage = matrix[bombRow][bombCol];

        if (bombDamage > 0) {
            snowBallDamage += bombDamage;
            snowBallKills++;

            matrix = explode(matrix, bombRow, bombCol, bombDamage);
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                snowBallDamage += matrix[row][col];
                snowBallKills++;
            }
        }
    }
    console.log(snowBallDamage);
    console.log(snowBallKills);

}
//Test the code
// solve(['5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1'
// ]);