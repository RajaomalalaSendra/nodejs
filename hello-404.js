// The 404 server in the nodeJs
var http = require('http')
debugger;
http.createServer( function (req, res) {
    res.writeHead(404, { "Content-Type":"html"});
    res.end("<h1>This is the 404 error</h1>");
}).listen(1235, '127.0.0.1');
    console.log('Server is running at http://127.0.0.1:1235 or at localhost:1235');
