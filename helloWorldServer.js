var http = require('http');
http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type':'html'});
    res.end("<!Doctype Html><html><head><meta charset='utf-8'/><title>The html server for us</title></head><body><h1><font color='red'>all.html</font></h1><br/><hr color='red'/><p>This is the creation of the html page in the node server</p></body></html>");
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
