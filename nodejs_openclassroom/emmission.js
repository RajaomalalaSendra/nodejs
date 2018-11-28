// Pour la pratique de la fonction emmiter en nodejs; comment émettre des événements en nodejs
// Ici on va faire la pratique

// création d'une variable EventEmitter
var EventEmitter = require('events').EventEmitter;
// Puis la création de l'évènement jeu dans notre EventEmitter;
var jeu = new EventEmitter();
var joueur = new EventEmitter();
//Puis on va écouter notre événement jeu dans le gameover
jeu.on('gameover', (message) => {
    console.log(message);
});
joueur.on('nouveaujoueur', (nom = "None", age = "empty", adressemail ="theexemple@mail.com") => {
        console.log('le nom du nouveau joueur est ' + nom + ' et son age est de: ' + age + ' et de mail ' + adressemail);
});
// Pour l'émettre on devrait utiliser la fonction emit qui est à l'interieur de EventEmitter
jeu.emit('gameover', 'Resy ianao ka tsy misy lalao intsony');
joueur.emit('nouveaujoueur', 'Mandresy', 34, 'rajaonarimanana@exapler.expjs');
joueur.emit('nouveaujoueur');