// Define Veriable 
let apple = "apple"
let upperCase = "aPPLE"
let ten = 10
let twenty = 20
let fruits = ["apple","Banana","Mango"]

// test for equality and inequality with string
console.log("is apple is equal to Apple")
console.log(apple == "apple");


console.log("\n is apple is not equal to apple")
console.log(apple != "apple");


// Tests using the lower case function
console.log("\n Is APPLE is equal to apple after converting to lowerCase")
console.log(upperCase.toLowerCase()=== "apple");

console.log("\n is APPLE is not equal appler after converting to lowerCase")
console.log(upperCase.toLowerCase()!="apple");

// numerical testing
// equal to
console.log("\n is ten equal to twenty?")
console.log(ten === twenty);

// not Equal to
console.log("\n ten is not equal to twenty")
console.log(ten != twenty)

// Greater than
console.log("\n is ten greater than Zero")
console.log(10 > 0)

// less than
console.log("\n is twent less than ten")
console.log(twenty < ten)

// Greater than & Equal to
console.log("\n is ten is greater than or equal to 5?")
console.log(10 >= 5 )

// less than or equal to 
console.log("\n twenty is less than or equal to 10")
console.log(twenty <= 10)

// Tests using "and" and "or" operators

// Using && 
console.log("\n thwenty is not equal to 10 and twenty is greater than 10")
console.log(twenty != 10 && twenty > 10)

console.log("\n thwenty is not equal to 10 and twenty is greater than 10")
console.log(twenty != 10 && twenty > 30)

// Using || (or)
console.log("\n twenty is grater than 50 or 20 is equal to 20")
console.log(20 > 50 || 20 === 20 )

console.log("\n twenty is grater than 50 or 20 is not equal to 20")
console.log(20 > 50 || 20 != 20 )

// • Test whether an item is in a array
console.log ("\n is apple inculed in my array")
console.log(fruits.includes("apple"));

console.log ("\n is apple not inculed in my array")
console.log(!fruits.includes("apple"));




