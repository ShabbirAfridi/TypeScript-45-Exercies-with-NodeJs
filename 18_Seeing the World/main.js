var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making array of country and print its Orignal Order
var countriestoVist = ["China", "Danmark", "Brazil", "Afghanistan"];
console.log("orignal Oder:", countriestoVist);
// print the array alphabetical order 
console.log("alphabetical order:", __spreadArray([], countriestoVist, true).sort());
// show that the array is still in its orignal oder
console.log("Stil in orignal oder:", countriestoVist);
// print the arrya in reverse oder
console.log("Reverse oder:", __spreadArray([], countriestoVist, true).reverse());
// show that the array is still in its orignal oder
console.log("Stil in orignal oder", countriestoVist);
// we have change the orignal array oder now
console.log("orignal array revers:", countriestoVist.reverse());
// print the array to show that its back to its orignal oder
console.log("BAck to orignal oder", countriestoVist.reverse());
// print the array to show that its oder has been changed in alphbetical oder now
console.log("sorted in alphabetical  oder", countriestoVist.sort());
// we have change again the orignal array oder now
console.log("orignal array revers:", countriestoVist.reverse());
