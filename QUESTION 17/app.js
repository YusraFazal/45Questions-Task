// creating a guest list array
var guestList = ["Yusra", "Anum", "Ayesha"];
//making variable for those guest who cant come  
var dontcome = guestList[1];
// print the name of guest who cant come
console.log(dontcome, "nahi ah sakti");
//add or remove values from guest list array
guestList.splice(1, 2, "Shazia Ani");
//print message for bigger table.
console.log("Good news ! We have found a bigger table for dinner");
//adding a new value at starting index of array
guestList.unshift("Abida Ani");
//adding a new value at ending index of array
guestList.push("Yumna Api");
//get a middle index of our array
var middleindex = Math.floor(guestList.length / 2);
//addind a new guest to middle index of array
guestList.splice(middleindex, 0, "Yaman Bhai");
//print message of updated list 
console.log("updated list of our guests");
//sendind a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("SALAM ".concat(oneguest, ",Would you like to dinner with me ?")); });
//inform that only two guest can be invited for dinner
console.log("unfortunately,the new dinner table wont arrive on time,so I can only invite two guests to dinner with me");
//using while-loop to remove guest from the array until only names remains
while (guestList.length > 2) {
    var removedguest = guestList.pop();
    console.log("SORRY, ".concat(removedguest, " I cant invite you to dinner"));
}
//sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ",you are still invitsd to dinner")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
