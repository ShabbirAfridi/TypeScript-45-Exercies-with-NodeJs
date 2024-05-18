// Array Current User
var current_User = ["afridi", "Hamza", "Zoahib", "Adil", "Sammer"];
// Array New Useer
var new_User = ["Zeeshan", "Afaq", "Hamza", "Qasim", "Adil"];
// Loop thourgh new user to check for usernames availity
new_User.forEach(function (new_one_user) {
    var our_Condition = current_User.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_Condition) {
        console.log("sorry ".concat(new_one_user, " ALready Taken"));
    }
    else {
        console.log("This User ".concat(new_one_user, " is Avilable"));
    }
});
