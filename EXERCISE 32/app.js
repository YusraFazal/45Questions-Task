//array of current users
var current_users = ["Ali", "Hamza", "Zain", "Usman"];
//array of new users
var new_users = ["Ayesha", "Yusra", "zain", "Yaman"];
//loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    //making a condintion for userName already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    //print different messages using If-Else statements  
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This userName ".concat(new_one_user, " is available"));
    }
});
