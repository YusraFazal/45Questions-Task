//array of current users
let current_users = ["Ali","Hamza","Zain","Usman"];
//array of new users
let new_users = ["Ayesha","Yusra","zain","Yaman"]
//loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user =>  {
//making a condintion for userName already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())
//print different messages using If-Else statements  
    if(our_condition){ 
    console.log(`Sorry ${new_one_user} is already taken!`)
  }else{
    console.log(`This userName ${new_one_user} is available`)
    }
})
