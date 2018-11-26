const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);
    if (req.url === '/') {
        fs.readFile('./public/index.html', "UTF-8", (err, html) =>{
            res.writeHeader(200, {'Content-Type':'text/html'});
            res.end(html);
        });

    }else if (req.url.match(/.css$/)) {
        var cssPath = path.join(__dirname, 'public', req.url );
        var fileStream = fs.createReadStream(cssPath, 'UTF-8');

        res.writeHeader(200, {'Content-type':'text/css'});

        fileStream.pipe(res);
    }else if (req.url.match(/.jpg$/)) { 
        var imgPath = path.join(__dirname, 'public', req.url);
        var imgStream = fs.createReadStream(imgPath);

        res.writeHeader(200, {'Content-Type':'image/jpeg'});

        imgStream.pipe(res);
    }else if (req.url.match(/.html$/)) {
        var htmlPath = path.join(__dirname, 'public', req.url);
        var htmlStream = fs.createReadStream(htmlPath, 'UTF-8');
        
        res.writeHeader(200, {'Content-Type':'text/html'});

        htmlStream.pipe(res);
    }else{
        res.writeHeader(404, { 'Content-Type':'text/plain'});
        res.end('404, file is not found');
    }
});
server.listen(3000);
console.log('The server is running at localhost:3000');