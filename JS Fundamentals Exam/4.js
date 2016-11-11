'use strict';
function solve(arr) {
    let people = new Map;
    for (let i = 0; i < arr.length; i++) {
        let firstPerson = '',
            secondPerson = '';
        if (arr[i].length > 1) {
            firstPerson = arr[i].split('-')[0];
            secondPerson = arr[i].split('-')[1];
        } else {
            firstPerson = arr[i];
        }
        if (firstPerson === secondPerson) {
            continue;
        }
        if (!people.has(firstPerson)) {
            people.set(firstPerson, [])
        } else {
            if (people.has(secondPerson)) {
                if (people.get(secondPerson).indexOf(firstPerson) > -1) {
                    continue;
                } else {
                    people.get(secondPerson).push(firstPerson);
                }
            } else {
                continue;
            }
        }
    }

    let x = Array.from(people);
    x.sort(function (a, b) {
        let countA = 0,
            countB = 0;
        if (b[1].length > a[1].length) {
            return b[1].length - a[1].length;
        } else if (a[1].length === b[1].length) {
            for (let i = 0; i < x.length; i++) {
                if (x[i][1].indexOf(a[0]) > -1) {
                    countA++;
                }
                if (x[i][1].indexOf(b[0]) > -1) {
                    countB++;
                }
            }
            if (countA > countB) {
                return countA - countB
            } else {
                return countB - countA;
            }
        }
    });

    console.log(x[0][0]);
    x[0][1].forEach((val, key) => console.log(`${key + 1}. ${val}`));
}
//Test the code
// solve([
//     'J',
//     'G',
//     'P',
//     'R',
//     'C',
//     'J-G',
//     'G-J',
//     'P-R',
//     'R-P',
//     'C-J'
//
// ]);