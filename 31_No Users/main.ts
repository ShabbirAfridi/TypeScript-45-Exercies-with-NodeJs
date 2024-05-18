let userName =["Afridi","Hamza","Zoahib","Admin","Sameer"]

userName= []

if(userName.length === 0){
    console.log("Your Array is Empty we need to find some user?")
}
else{
    userName.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser} would you like to see a status report?`)
        }
        else{
            console.log(`hello ${oneUser} thank you for logging in again.`)
        } 
    })
    
}