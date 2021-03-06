'use strict';
function solve(arr) {
    let title = arr[0].toLowerCase(),
        day = arr[1].toLowerCase();
    if (title === 'the godfather') {
        switch (day) {
            case 'monday' :
                console.log('12');
                break;
            case 'tuesday' :
                console.log('10');
                break;
            case 'wednesday' :
            case 'friday' :
                console.log('15');
                break;
            case 'thursday' :
                console.log('12.50');
                break;
            case 'saturday' :
                console.log('25');
                break;
            case 'sunday' :
                console.log('30');
                break;
            default :
                console.log('error');
                break;
        }
    } else if (title === 'schindler\'s list') {
        switch (day) {
            case 'monday' :
            case 'tuesday' :
            case 'wednesday' :
            case 'friday' :
            case 'thursday' :
                console.log('8.50');
                break;
            case 'saturday' :
            case 'sunday' :
                console.log('15');
                break;
            default :
                console.log('error');
                break;
        }
    } else if (title === 'casablanca') {
        switch (day) {
            case 'monday' :
            case 'tuesday' :
            case 'wednesday' :
            case 'friday' :
            case 'thursday' :
                console.log('8');
                break;
            case 'saturday' :
            case 'sunday' :
                console.log('10');
                break;
            default :
                console.log('error');
                break;
        }
    } else if (title === 'the wizard of oz') {
        switch (day) {
            case 'monday' :
            case 'tuesday' :
            case 'wednesday' :
            case 'friday' :
            case 'thursday' :
                console.log('10');
                break;
            case 'saturday' :
            case 'sunday' :
                console.log('15');
                break;
            default :
                console.log('error');
                break;
        }
    } else {
        console.log('error');
    }
}
//Test the code
//solve(['shindler\'s list','thursday']);