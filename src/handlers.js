const fs = require('fs');
// const querystring = require('querystring');
const path = require('path');


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

module.exports = {
    handleHome,
    handleAll
};