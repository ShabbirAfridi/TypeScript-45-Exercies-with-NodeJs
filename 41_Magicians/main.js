// define a funcation to print each magician’s name from array-----
// function show_magican(magician:String []){
//     magician.forEach(name => console.log(name));
// }
// let magician_name= ["Ahmed","Adil","Sameer","Hamza","Zohaib"]
// show_magican(magician_name)
function show_magican(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
var magician_name = ["Adil", "Afrid"];
show_magican(magician_name);
