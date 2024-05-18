"use strict";
// Creating Array
// let number = [1,2,3,4,5,6,7,8,9];
// using for Loop
// for(let oneNumber of number){
//     let ordinalEnding:String;
//     if(oneNumber === 1 ){
//         ordinalEnding ="st"
//     }else if(oneNumber ===2){
//         ordinalEnding ="nd"
//     }else if (oneNumber ===3){
//         ordinalEnding ="rd"
//     }else{
//         ordinalEnding="th"
//     }
//     console.log(`${oneNumber}${ordinalEnding}`)
// }
let number = [1, 2, 3, 4, 5];
for (let oneNumber of number) {
    let ordinalEnding;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else {
        ordinalEnding = "td";
    }
    console.log(`${oneNumber}${ordinalEnding}`);
}
