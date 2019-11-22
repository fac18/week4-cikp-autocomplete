const handlers = require('./handlers.js');

const router = (request, response) => {
    const endpoint = request.url;
    // IF ELSE STATEMENT GOES HERE
    if(endpoint === '/') {
        handlers.handleHome(request, response);
    }else if (endpoint.indexOf('public') !== -1){
        handlers.handleAll(request, response);
    }else if (endpoint.includes('/search')) {
        handlers.handleSearch(request, response, endpoint);
    }else if (endpoint.includes('/submit')) {
        handlers.handleSubmit(request, response, endpoint);
    }else {
        response.writeHead(404);
        response.end('404 not found');
    }
}

module.exports = router;

