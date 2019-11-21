const handlers = require('./handlers.js');
// const fs = require('fs');
// const path = require('path');

const router = (request, response) => {
    const endpoint = request.url;
    // console.log(endpoint);
    // IF ELSE STATEMENT GOES HERE
    if(endpoint === '/') {
        handlers.handleHome(request, response);
    }else if (endpoint.indexOf('public') !== -1){
        handlers.handleAll(request, response);
    }else {
        response.writeHead(404);
        response.end('404 not found');
    }
}

module.exports = router;

