function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}


// Record the length of the input to validate it's length
function inputLength(inputText) {
    if (inputText.length <= 140) {
        return true;
    }
    return false;
}

export { checkForName }
export { inputLength }