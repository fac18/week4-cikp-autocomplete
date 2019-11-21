const suggestions = document.querySelector(".suggestions");

//currentMatches = ["Germany", "Italy", "Paraguay", "Sweden", "UK"];

const createList = () => {
    currentMatches.forEach( x => {
        console.log(currentMatches);
        let createListItem = document.createElement('li');
        let suggestionItem = document.createTextNode(x);
        createListItem.appendChild(suggestionItem);
        suggestions.appendChild(createListItem);
    })
}

createList();