var http =  require('http');
debugger;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type':'text/plain'});
    debugger;
    res.end('Hello my Friends\n');
}).listen(1234, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1234');
