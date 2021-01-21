
// kilometerToMeter
function kilometerToMeter(kiloMeter) {
    // converted
    let convert = 1000 * kiloMeter;
    return convert;
}
let total = kilometerToMeter ( )


// // budgetCalculator 


//  hotelCost
function hetelCost (n) {
    countCost = 0;

    // ( 1st 10 days )
    if (n <= 10) {
        countCost = n * 100;
    }
    // ( 2nd 10days + 1st 10days )
    else if (n <= 20) {
        let firstPart = 10 * 100;
        let remainingDays = n - 10;
        let secondPart = remainingDays * 80;
        countCost = firstPart + secondPart;
    }
    // ( last all days + 2nd 10days + 1st 10days )  
    else {
        let firstPart = 10 * 100;
        let secondPart = 10 * 80;
        let remainingDays = n - 20;
        let thirdPart = remainingDays * 50;
        countCost = firstPart + secondPart + thirdPart;
    }
    return countCost;
}
let total = hetelCost();




// megaFriend
let names = [ 'shakil' , 'hridoy' , 'prijom' , 'jobayer' , 'shamim' , 'mosharof' , 'prince'];
let maxName = [ ] ;
for ( let i = 0 ; i < names.length ; i++ ) {
    let element = names [ i ] ;
    let index = maxName.indexOf(element)
    if ( index > names ){
        
    }


    console.log(maxName);
}