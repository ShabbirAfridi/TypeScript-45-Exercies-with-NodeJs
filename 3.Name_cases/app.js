// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personalName = "Shabbir afridi";
console.log("Lowercase:", personalName.toLowerCase());
console.log("upperCase;", personalName.toUpperCase());
// console.log("titleCase;", personalName.replace (/\b\w/g, (char) => char.toUpperCase()))
console.log("titleCase", personalName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
