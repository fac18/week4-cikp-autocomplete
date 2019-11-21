// const inputBox = document.querySelector('input[name="autocomplete"]');
const suggestions = document.querySelector(".suggestions");
const children = document.getElementsByTagName("li");

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
