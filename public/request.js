
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        // something something 
    }
};

xhr.open('GET', '../src/db/country-dish.js', true);
xhr.send();


