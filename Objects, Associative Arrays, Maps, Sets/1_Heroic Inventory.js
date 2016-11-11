'use strict';
function solve(arr) {
    let input = arr.map(x => {
        let dataInArray = x.split('/'),
            heroItems = [],
            finalHeroArray = [],
            heroObj = {
                name: dataInArray[0].trim(),
                level: dataInArray[1].trim()
            };
        for (let items = 2; items < dataInArray.length; items++) {
            dataInArray[items] = dataInArray[items].split(',').forEach(x => {
                x = x.trim();
                heroItems.push(x);
            });


        }
        ;
        heroObj.items = heroItems;
        finalHeroArray.push(heroObj);
        return heroObj;
    });
    console.log(JSON.stringify(input));
}
//Test the code
// solve(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']);