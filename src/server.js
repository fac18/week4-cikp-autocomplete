const http = require('http');
const router = require('./router.js');
const port = process.env.PORT || 3000;
const server = http.createServer(router);

server.listen(port, () => console.log("Server listening on port 3000. Ready to accept requests :)"));
