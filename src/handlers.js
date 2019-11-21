const fs = require('fs');
// const querystring = require('querystring');
const path = require('path');
const countryDish = require('./country-dish');



const handleHome = (request, response) => {
    // console.log("handlerHome - this is running");
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
        if(error) {
            console.log(error);
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.end("<h1>Sorry, a dinosaur ate our server :( 🦕 </h1>");
        } else {
            // console.log(path);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(file);
        }
        
    });
}

const handleAll = (request, response) => {
    const endpoint = request.url;
    const extension = endpoint.split('.')[1];
    console.log("ext: ", extension);
    console.log("endpoint: ", endpoint);
        const extensionType = {
                html: 'text/html',
                css: 'text/css',
                js: 'application/js',
                json: 'application/json',
                ico: 'image/x-icon'
            }
        const filePath = path.join(__dirname, "..", endpoint);
        fs.readFile(filePath, (error, file) => {
            if(error) {
                response.writeHead(500, {'Content-type': 'text/html'});
                response.end('<h1>Sorry, a dinosaur ate our server :(</h1>');
            } else {
                response.writeHead(200, {'Content-Type': extensionType[extension]});
                response.end(file);
            }
        });
        // console.log(endpoint);
}

const handleSearch = (request, response, endpoint) => {
    console.log({endpoint});
    let searchStr = endpoint.split('=')[1];
    console.log("this is search field", searchStr);
    let countryArr = Object.keys(countryDish);
    // console.log('this is array', countryArr);
    let result = countryArr.filter(country => country.toLowerCase().includes(searchStr));
    console.log(result);
    // If the endpoint given into the api request function includes the word search... 
    // ...then the search url should come here as e.g. /search?q=germany
    // We need to take only the part of the search term after the q. (querystrings?)
    // Then we need to send that term into country-dish and somehow filter it for... 
    // ...anything matching the search term.
    // Possibly with filter(Object.keys(countryDish))...
    // Then we need to JSON stringify that result so it can be passed back...
    // ...as a response to the API and front end for DOM manipulation.
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(result));
}

module.exports = {
    handleHome,
    handleAll,
    handleSearch
};
