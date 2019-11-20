
const api = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            const countryDish = JSON.parse(xhr.responseText);
            console.log("XHR response: ",xhr.response);
            console.log("Dish: ", countryDish);
        }
    };
    
    // handle the api call with a specific handler and "/search" as an endpoint 
    xhr.open('GET', './public/countryDish.json', true);
    xhr.send();
    
    }




// module.exports = api
// export {api};
