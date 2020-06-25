function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    if (Client.inputLength(formText) === false) {
        alert("We have > 140 characters or other invalid input (nothing entered)");
        document.getElementById('results').innerHTML= "Please enter up to 140 characters of text to be analyzed";
        document.getElementById('polarity').innerHTML = "";
        document.getElementById('subjectivity').innerHTML = "";
        document.getElementById('text').innerHTML = "";
        document.getElementById('polarity-confidence').innerHTML = "";
        document.getElementById('subjectivity-confidence').innerHTML = "";
    }

    else {
    console.log(formText.length);
    console.log("::: Form Submitted :::");
    // TODO: Fetch API with localhost target
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    let textSubmission = {
        text: formText
    };

    console.log("::: Form Submitted :::");
    // TODO: Fetch API with localhost target
    fetch('http://localhost:8081/aylien', {
        method: 'POST',
        body: JSON.stringify(textSubmission),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res.polarity);
        console.log(typeof res.polarity);
        document.getElementById('polarity').innerHTML = "Polarity: " + res.polarity;
        document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res.subjectivity;
        document.getElementById('text').innerHTML = "Text that was analyzed: '" + res.text + "'";
        document.getElementById('polarity-confidence').innerHTML = "Polarity confidence: " + res.polarity_confidence;
        document.getElementById('subjectivity-confidence').innerHTML = "Subjectivity confidence: " + res.subjectivity_confidence;
    })
}
}

export { handleSubmit }