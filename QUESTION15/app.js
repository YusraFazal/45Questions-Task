var guestList = ["Maha", "Anum", "Ayesha"];
var dontcome = guestList[1];
console.log(dontcome, "nahi ah sakta");
guestList.splice(1, 1, "Shazia Ani");
guestList.forEach(function (guest) { return console.log("SALAM ".concat(guest, ",Would you like to dinner with me ?")); });
