// Array Current User
let current_User = ["afridi","Hamza","Zoahib","Adil","Sammer"]

// Array New Useer
let new_User = ["Zeeshan","Afaq","Hamza","Qasim","Adil"]

// Loop thourgh new user to check for usernames availity
new_User.forEach(new_one_user =>{

    let our_Condition = current_User.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_Condition){
        console.log(`sorry ${new_one_user} ALready Taken`)
    }else{
        console.log(`This User ${new_one_user} is Avilable` )
    }
    
}) 
