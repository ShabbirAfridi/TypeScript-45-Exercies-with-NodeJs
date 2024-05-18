// Crating a Guest array
var guest = ["Afridi", "sameer", "Hamza", "Zohaib"];
// making a veriable for those guest who cant come
var dontCOme = guest[0];
// print the guest name who cant come
console.log(dontCOme, "dont come");
// add & remove array 
guest.splice(0, 1, "Shabbir");
// message print bigger table 
console.log("Good news ! we have found a bigger table for dinner");
// adding a new guest at starting index of array 
guest.unshift("Adil");
// adding a new guest at Ending index of array
guest.push("Zeshan");
// get a middle index of our guest list array
var middleIndex = Math.floor(guest.length / 2);
// adding a new guest to middle  index of array
guest.splice(middleIndex, 0, "Ahmed");
// printing updating list
console.log("Update list of our guest");
// Sending inviting 
guest.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, " would like dinner with  me ")); });
