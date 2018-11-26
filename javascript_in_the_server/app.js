const http = require('http');
const fs = require('fs');

/* function rqListener (request, response) {
    request.write()
}
const server = http.createServer(rqListener);*/
/* another way is:
const server = http.createServer( function(request, response) {
        ..... all the core of the function .......
});
*/
/* Here also you can use:
const server = http.createServer( (request, response) => {
    All the function and the variable inside the function is over here you can write it.....
});
*/
const server = http.createServer( (request, response) => {
        const url = request.url;
        const method = request.method;
        if ( url === '/' ) {
            response.write('<html>');
            response.write('<head><title>Input Message</title></head>');
            response.write('<body>');
            response.write('<form action="/message" method="POST" name="message"><input type="text"><button type="submit">Send</button></form><hr color="blue"/>');
            response.write('<footer><p>&copy;notreserveurnodejs.ionic</p></footer>');
            response.write('</body>');
            response.write('</html>');
            return response.end();
        }
        if ( url === '/message' && method === "POST") {
            const body = [];
            request.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk);
            });
            request.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                fs.writeFile('message.txt', message, err => {
                    response.setHeader('Location', '/');
                    response.statusCode = 302;                    
                    return response.end();
                });
            });            
           
        }
        //console.log(request.url, request.method, request.headers);
        //process.exit();
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>This is the webpage of ours</title></head>');
        response.write('<body>')
        response.write('<h1><font color="blue">Welcome to the node js server</font></h1><hr color="blue"/>');
        response.write('<footer><p>&copy;notreserveurnodejs.ionic</p></footer>');
        response.write('</body>');
        response.write('</html>');
        response.end();
});
server.listen(3000);
console.log('The server is running at the localhost:3000');