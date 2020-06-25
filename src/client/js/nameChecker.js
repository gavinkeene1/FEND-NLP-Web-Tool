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
    // Change to if statement at 0 or > 140 characters
    else if (inputText.length == 0 || inputText.length > 140) {
        // Entering only 0 or more than 140 characters is invalid
        return false;
    }
}

export { checkForName }
export { inputLength }