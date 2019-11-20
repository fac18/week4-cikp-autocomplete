const fs = require('fs');
const querystring = require('querystring');
const path = require('path');


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

module.exports = handleHome;