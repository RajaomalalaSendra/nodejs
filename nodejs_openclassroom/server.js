const http = require('http');
const url = require('url');

var forTheUser = (req, res) => {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHeader(200, {'Content':'text/html'});
    if (page == "/") {
        res.write('<!DOCTYPE html>'+
                '<html>'+
                '<head>'+
                '<meta charset="utf-8"/>'+
                '<title>The page html for all of us</title>'+
                '</head>'+
                '<body>'+
                '<p><font color="red">We are the winner with Christ not a looser</font></p>'+
                '<b>WELCOME to the club of all people who knows the nodejs.</b>' +
                '</body>'+
                '</html>'
        );
    } else if (page == '/sous_dossier') {
        res.write('<!DOCTYPE html>'+
                '<html>'+
                '<head>'+
                '<meta charset="utf-8"/>'+
                '<title>The page html for all of us</title>'+
                '</head>'+
                '<body>'+
                '<p><font color="red">We are the winner with Christ not a looser</font></p>'+
                '<b>Vous êtes sur la page de sous dossier de notre url pour apprendre le nodejs</b>'+
                '</body>'+
                '</html>'
        );
    }else if (page == '/sous_dossier/sous_dossier') {
        res.write('<!DOCTYPE html>'+
                '<html>'+
                '<head>'+
                '<meta charset="utf-8"/>'+
                '<title>The page html for all of us</title>'+
                '</head>'+
                '<body>'+
                '<p><font color="red">We are the winner with Christ not a looser</font></p>'+
                '<b>On est entré dans le sous dossier de notre sous dossier en utilisant le serveur nodejs</b>'+
                '</body>'+
                '</html>'
        );
    }else{
        res.write('<!DOCTYPE html>'+
                '<html>'+
                '<head>'+
                '<meta charset="utf-8"/>'+
                '<title>The page html for all of us</title>'+
                '</head>'+
                '<body>'+
                '<p><font color="red">We are the winner with Christ not a looser</font></p>'+
                '<b>Je suis vraiment désolé on va regler cette problème</b>'+
                '</body>'+
                '</html>'
        );
    }
    res.end();
}
const server = http.createServer(forTheUser);

server.listen(8080);

console.log('The server is used at the port 8080 or run the http://localhost:8080 or the http://127.0.0.1:8080');