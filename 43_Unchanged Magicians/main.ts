
function show_magicians(magician :string[]){
    magician.forEach(name =>console.log(name))
}

function make_great(magician:string[]){
    return magician.map(name =>`The Great ${name}`);

}

// define an Array of magicians names
let magician_name = ["Adil","Hamza","Yaseen"]

// Making a copy orignal array through .slice() Funcation
let copy_magicians  = magician_name.slice()

// Modify the copied array to include "The Great" with there Name
let  copy_Great_magician = make_great(copy_magicians);

show_magicians(magician_name)

show_magicians(copy_Great_magician)


