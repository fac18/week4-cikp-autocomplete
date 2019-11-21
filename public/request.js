// const handleSearch = require('./handlers.js');
// inputBox is our search bar. It waits for an input and runs api function each time.
const inputBox = document.querySelector('input[name="autocomplete"]');
let currentMatches = [];


const api = () => {
    //grab the value in the input box
    let currentInput = inputBox.value;
    let xhr = new XMLHttpRequest();
    // make a file path using the search prefix and our input value
    let updatedSearch = "/search?q=" + currentInput;
    console.log(updatedSearch);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Response comes back so...
            // Populate the currentmatches array with parsed response
            currentMatches = JSON.parse(xhr.responseText);
            // append current matches to DOM -- call function here.
        }
    };
    // Send the search term over to our server
    xhr.open("GET", updatedSearch, true);
    xhr.send();
};

inputBox.addEventListener("input", api);
