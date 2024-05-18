let guestList = ["Afridi","Sameer","Zohaib","Hamza"];
let dontCome = guestList[0];

console.log(dontCome,"Nhi Aah Sakta Hain");

guestList.splice(0, 1, "Shabbir");

guestList.forEach (guestList => console.log(`Hello ${guestList}, Would you like to dinner with me`));