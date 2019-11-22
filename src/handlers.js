const fs = require('fs');
const path = require('path');
const countryDish = require('./country-dish');



const handleHome = (request, response) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
        if(error) {
            console.log(error);
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.end("<h1>Sorry, a dinosaur ate our server :( 🦕 </h1>");
        } else {
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
}

const handleSearch = (request, response, endpoint) => {
    console.log({endpoint});
    //search url should come here as e.g. /search?q=germany
    // Split to select only the searched term
    let searchStr = endpoint.split('=')[1];
    // decode to keep spaces in country names working
    searchStr = decodeURI(searchStr)
    console.log("this is search str", searchStr);
    let countryArr = Object.keys(countryDish);
    // Filter the data file keys for matches to the search term
    let result = countryArr.filter(country => country.toLowerCase().startsWith(searchStr));
    console.log(result);
    response.writeHead(200, { "content-type": "application/json" });
    // Stringify the result and send it back to the api function
    response.end(JSON.stringify(result));
}


const handleSubmit = (request, response, endpoint) => {
    console.log({endpoint});
    let finalCountry = endpoint.split('=')[1];
    finalCountry = decodeURI(finalCountry)
    console.log("final country ", finalCountry);
    let finalDish = countryDish[finalCountry];
    console.log(finalDish);
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(finalDish));
}





module.exports = {
    handleHome,
    handleAll,
    handleSearch,
    handleSubmit
};