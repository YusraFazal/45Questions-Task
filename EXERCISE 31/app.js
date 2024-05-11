var userNames = ["Saima", "Sara", "Areesha", "Admin", "yusra"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array in empty we need to find  some users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thankyou for logging in again."));
        }
    });
}
