function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// define an Array of magicians names
var magician_name = ["Adil", "Hamza", "Yaseen"];
// Making a copy orignal array through .slice() Funcation
var copy_magicians = magician_name.slice();
// Modify the copied array to include "The Great" with there Name
var copy_Great_magician = make_great(copy_magicians);
show_magicians(magician_name);
show_magicians(copy_Great_magician);
