// importer d'abords l'express dans notre fichier ourexpress.js
var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type','text/plain');
    res.end('Ici c\'est notre acceuil pour cette page web');
});

app.get('/login', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous pouvez créer votre login ici même!!')
});

app.get('/login/sendra', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('C\'est la page que sendra a consulté');
});

app.get('/login/davson', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('C\'est la page que davson a consulté');
});
// Dernier url pour le login dans l'expressjs
app.get('/login/albert', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('C\'est la page qu\'on peut trouver Alebrt pour aujourd\'hui');
});

// Des routes dynamiques en express js;
app.get('classe/:etagenum/langue', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Here is the candidate number ' + req.params.etagenum) //" who learn the language: " + req.params.langue
});

//générer des erreur 404 en express.js
app.use( (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Une page introuvable' );
});
app.listen(8080);

console.log("L'application est servée dans le port 8080");