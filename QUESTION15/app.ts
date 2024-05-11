let guestList = ["Maha", "Anum", "Ayesha"];
let dontcome = guestList[1];
console.log(dontcome,"nahi ah sakta");
guestList.splice(1,1,"Shazia Ani");
guestList.forEach(guest => console.log(`SALAM ${guest},Would you like to dinner with me ?`));