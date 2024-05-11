// making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("You seleclet ".concat(size, " size with ").concat(printMessage, " prints on shirt."));
}
// calling a function with by_default
make_shirt();
// calling a function with medium size and default message 
make_shirt("Medium");
// calling a function now with Small size and also different Print message
make_shirt("Small", "I Love Javascript");
