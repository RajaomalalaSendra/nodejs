const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if ( url === '/' ) {
        res.write('<html>');
        res.write('<head><title>Input Message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST" name="message"><input type="text"><button type="submit">Send</button></form><hr color="blue"/>');
        res.write('<footer><p>&copy;notreserveurnodejs.ionic</p></footer>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if ( url === '/message' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            
            fs.writeFile('message.txt', message, err => {  
                res.statusCode = 302;
                res.setHeader('Location', '/');                    
                return res.end();
            });
        });            
       
    }
    //console.log(request.url, request.method, request.headers);
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This is the webpage of ours</title></head>');
    res.write('<body>')
    res.write('<h1><font color="blue">Welcome to the node js server</font></h1><hr color="blue"/>');
    res.write('<footer><p>&copy;notreserveurnodejs.ionic</p></footer>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;
