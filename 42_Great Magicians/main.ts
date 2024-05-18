
function show_magicians(magician :string[]){
    magician.forEach(name =>console.log(name))
}

function make_great(magician:string[]){
    return magician.map(name =>`The Great ${name}`);

}

// define an Array of magicians names
let magician_name = ["Adil","Hamza","Yaseen"]

let great_Magicians =make_great(magician_name)

console.log(great_Magicians)

show_magicians(great_Magicians)
