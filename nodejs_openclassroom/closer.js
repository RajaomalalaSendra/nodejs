const http = require('http');

var closer = function (req, res) {
    res.writeHeader(200, {'Content-Type':'text/plain'});
    res.write('Par exemple notre exemple ici sur cette page.');    
}

const server = http.createServer(closer);

server.on('close', () => {
        console.log('BYE BYE NOTRE SERVER');
});
/* 
Ce code est équivalent de:
server.on('request', function (req, res){
    res.writeHeader(200 {'Content-Type':'text/plain'});
    res.write('Un texte brute pour nous provenant du serveur');
});
*/
server.listen(8080);
console.log('Le serveur peut être executer dans le port 8080');

server.close();