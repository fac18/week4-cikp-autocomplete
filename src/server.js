const http = require('http');
const router = require('./router.js');

const server = http.createServer(router);

server.listen(3000, () => console.log("Server listening on port 3000. Ready to accept requests :)"));
