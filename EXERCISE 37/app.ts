// making a function
function make_shirt (size: string = "Large" , printMessage: string = "I Love Typescript"){
    console.log(`You seleclet ${size} size with ${printMessage} prints on shirt.`)
}

// calling a function with by_default
make_shirt()

// calling a function with medium size and default message 
make_shirt("Medium")

// calling a function now with Small size and also different Print message
make_shirt("Small" , "I Love Javascript")