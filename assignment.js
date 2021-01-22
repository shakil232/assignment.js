
// kilometerToMeter...
function kilometerToMeter ( kiloMeter ) {

    let convert = 1000 * kiloMeter;
    return convert;
}
let convertToMeter = kilometerToMeter (  )




//   budgetCalculator....
function budgetCalculter( Number1, Number2, Number3) {
    let sum    = 0;
    let watch  = Number1 * 50;
    let mobile = Number2 * 100;
    let laptop = Number3 * 500;
    sum        = watch + mobile + laptop;
    return sum;
}
let totalSum = budgetCalculter ( );



//  hotelCost...
function hetelCost ( n ) {
    calcultedCost = 0;

    // ( 1st 10 days )
    if ( n <= 10 ) {
        calcultedCost = n * 100;
    }
    // ( 2nd 10days + 1st 10days )
    else if  ( n <= 20 ) {
        let firstPart     = 10 * 100;
        let remainingDays = n - 10;
        let secondPart    = remainingDays * 80;
        calcultedCost     = firstPart + secondPart;
    }
    // ( last all days + 2nd 10days + 1st 10days )  
    else {
        let firstPart     = 10 * 100;
        let secondPart    = 10 * 80;
        let remainingDays = n - 20;
        let thirdPart     = remainingDays * 50;
        calcultedCost     = firstPart + secondPart + thirdPart;
    }
    return calcultedCost;
}
let totalHotelCost = hetelCost ( );



// megaFriend.....
function megaFriend (n) {
    let maxName = n [0];

    for ( let i = 0; i < n.length; i++ ) {
        let element = n [i];
        if ( element.length > maxName.length ) {
            maxName = element
        }
    } return maxName
}
let names = ['md-shakil-ahmed', 'robin-sorkar', 'prince-ft-mahamud', 'jobayer', 'mosharaf-hossain'];
let largestName = megaFriend ( names );

