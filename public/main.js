const suggestions = document.querySelector(".suggestions");
let children = document.getElementsByTagName("li");

const createList = () => {
    killAllChildren();
    currentMatches.forEach( x => {
        let createListItem = document.createElement('li');
        let suggestionItem = document.createTextNode(x);
        createListItem.appendChild(suggestionItem);
        suggestions.appendChild(createListItem);
    })
}

const killAllChildren = () => {    
    console.log("Killing all children");
    console.log("Here are children: ", children);
    while (suggestions.firstChild) {
        suggestions.removeChild(suggestions.firstChild);
    }
}
