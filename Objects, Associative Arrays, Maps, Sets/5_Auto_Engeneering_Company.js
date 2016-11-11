'use strict';
function solve(arr) {
    let input = arr.map(x => x.split(/[|\s]+/g)),
        map = new Map();

    for (let row of input) {
        let carBrand = row[0],
            carModel = row [1],
            producedCars = +row[2];
        if (map.has(carBrand)) {
            if (map.get(carBrand).has(carModel)) {
                map.get(carBrand).set(carModel, (map.get(carBrand).get(carModel) + producedCars));
            } else {
                map.get(carBrand).set(carModel, producedCars);
            }
        } else {
            map.set(carBrand, new Map().set(carModel, producedCars));
        }
    }
    for (let key of map) {
        console.log(key[0]);
        for (let inerKey of key[1]) {
            console.log(`###${inerKey[0]} -> ${inerKey[1]}`);
        }
    }
}
//Test the code
// solve(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10'
// ]);