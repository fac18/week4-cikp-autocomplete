// const inputBox = document.querySelector('input[name="autocomplete"]');
const suggestions = document.querySelector(".suggestions");
const children = document.getElementsByTagName("li");
const countryDishSection = document.querySelector(".country-dish");
let countrySubmitted = document.querySelector(".input-field");

const createList = () => {
    killAllChildren();
    currentMatches.forEach( x => {
        let createListItem = document.createElement('li');
        let suggestionItem = document.createTextNode(x);
        createListItem.appendChild(suggestionItem);
        createListItem.addEventListener('click', selectAutocomplete);
        suggestions.appendChild(createListItem);
    })
}

const killAllChildren = () => {
    while (suggestions.firstChild) {
        suggestions.removeChild(suggestions.firstChild);
    }
}

const selectAutocomplete = (event) => {
    searchValue = event.target.textContent;
    inputBox.value = searchValue;
    api();
}

// produce result upon submit
const createCountryDish = () => {
        let finalCountry = countrySubmitted.value;
        let paraCountryDish = document.createElement("p");
        let nodePara = document.createTextNode(finalCountry + "'s national dish is " + finalDish);
        paraCountryDish.appendChild(nodePara);
        countryDishSection.appendChild(paraCountryDish);
    }



