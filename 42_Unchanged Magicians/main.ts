
function show_magicians(magician :string[]){
    magician.forEach(name =>console.log(name))
}

function make_great(magician:string[]){
    return magician.map(name =>`The Great ${name}`);

}

// define an Array of magicians names
let magician_name = ["Adil","Hamza","Yaseen"]

// making a copy of orignal array through .slice( funcation)
let copy_magician_name = magician_name.slice();

// modify the copy array to inculd "The Great" with there names
let copy_Make_great = make_great(copy_magician_name)
// Show both Array Orignal/copy
// orignall
console.log("Orignal Array \n")
show_magicians(magician_name)

// copy array
console.log("\n Copy Array \n")
show_magicians(copy_Make_great)
