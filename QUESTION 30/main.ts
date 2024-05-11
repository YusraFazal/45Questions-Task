// creating a array
let usernames = ["saba","Aqsa","Adeen","Hina"];

//using forEach loop on Array
usernames.forEach(oneUser =>{
    if(oneUser === "Admin"){
    console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thankyou for logging ith again.`)
    }})