function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// define an Array of magicians names
var magician_name = ["Adil", "Hamza", "Yaseen"];
var great_Magicians = make_great(magician_name);
console.log(great_Magicians);
show_magicians(great_Magicians);
