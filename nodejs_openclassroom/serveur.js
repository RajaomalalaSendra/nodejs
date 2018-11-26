const http = require('http');

const serveur = http.createServer((req, res) => {
    res.writeHeader(200, { "Content-Type":"text/html"});
    res.write('<html>');
    res.write('<title>Welcome To the node.js</title>');
    res.write('<body><p>The welcomer inside the node.js</p></body>');
    res.write('</html>');
    res.end();
});
/* Code commun au précedent
var uneNotificationPourVisiteur = (req, res) => {
    res.writeHeader(200, { "Content-Type":"text/html"});
    res.write('<html>');
    res.write('<title>Welcome To the node.js</title>');
    res.write('<body><p>The welcomer inside the node.js</p></body>');
    res.write('</html>');
    res.end();
}
const serveur = http.createServer(uneNotificationPourVisiteur);
*/
serveur.listen(8080);
console.log('The server is running at the port 8080');