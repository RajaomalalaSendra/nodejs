// On devrais le modifier sur la ligne 8:44 (url must be a string not undefined);
const http = require('http');
var url = require('url');
const querystring = require('querystring');


var parametre = (req, res) => {
        var params = querystring.parse(url.parse(url.req).query);
        // url.parse(url.req).query => il va récuperer les chaines de caractères de notre url
        // querystring.parse => il va executer le découpage des paramètres
        res.writeHeader(200, { 'Content-Type':'text/plain' });
        if ('prenom' in params && 'nom' in params ) {
            res.write('votre vous êtes appelés ' + params['prenom'] + ' ' + params['nom'] );
        }else{
            res.write('Veuillez préciser votre nom et prénom parce que c\'est très important');
        }
        res.end();
}

const server = http.createServer(parametre);

server.listen(8080);
console.log('Notre serveur est executé dans le port 8080 ou bien consulter la page http://localhost:8080 ou bien la page http://127.0.0.1:8080');