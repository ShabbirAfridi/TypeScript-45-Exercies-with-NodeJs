var userName = ["Afridi", "Hamza", "Zohaib", "Admin", "Sameer"];
// userName.forEach(oneUser =>{
//     if(oneUser === "Admin"){
//         console.log(`Hello ${oneUser} would you like to see a status report?`)
//     }
//     else{
//         console.log(`hello ${oneUser} thank you for logging in again.`)
//     } 
// })
userName.forEach(function (one) {
    if (one === "Admin") {
        console.log("hello ".concat(one, " aao pyar se"));
    }
    else {
        console.log("Hello ".concat(one, " jao pyar"));
    }
});