// to render the subject.ejs

var express  = require('express');

app = express();

app.get('/', (req, res) => {
    res.render('menu.ejs');
});

app.get('/etage/:etagenum/chambre', (req, res) => {
    res.render('subject.ejs', { etage:req.params.etagenum });
});

app.get('/compter/:nombre', (req, res) => {
    var noms = ['Rajaomalala', 'Sendra', 'Andriampanjato'];
    res.render('nombre.ejs', {compteur:req.params.nombre, noms:noms});
});

app.use((req, res) => {
    res.setHeader('Content-Type','text/plain');
    res.status(404).send('This is an error 404\nWe are fixing it now.');
});

app.listen(9090);

console.log('Our server is running at the port 9090 or \nat the http://localhost:9090 or at the http://127.0.0.1:9090');