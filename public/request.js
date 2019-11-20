
const api = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const countryDish = JSON.parse(xhr.responseText);
            console.log(countryDish);
        }
    };
    
    xhr.open('GET', '../src/db/country-dish.js', true);
    xhr.send();
    
    }


// module.exports = api
// export {api};
