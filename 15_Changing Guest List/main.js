var guestList = ["Afridi", "Sameer", "Zohaib", "Hamza"];
var dontCome = guestList[0];
console.log(dontCome, "Nhi Aah Sakta Hain");
guestList.splice(0, 1, "Shabbir");
guestList.forEach(function (guestList) { return console.log("Hello ".concat(guestList, ", Would you like to dinner with me")); });
