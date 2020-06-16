function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // TODO: Fetch API with localhost target
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    let urlSubmission = {
        url: formText
    };

    console.log("::: Form Submitted :::")
    // TODO: Fetch API with localhost target
    fetch('http://localhost:8081/aylien', {
        method: 'POST',
        body: JSON.stringify(urlSubmission),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = JSON.stringify(res);
    })
}

export { handleSubmit }
