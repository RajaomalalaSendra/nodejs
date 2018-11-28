var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', (message) => {
        console.log(message);
});

jeu.on('newgamer', (name="player1", age=0 ) => {
        console.log(name, age);
});

jeu.on('sendra', (name) => {
    console.log(name + ' is my friend.');
});

jeu.on('albert', (name) => {
    console.log(name + ' is the friend of Albert.');
});

jeu.on('david', (name) => {
    console.log(name + ' is the friend of David.');
})
jeu.emit('gameover', 'This is the last game for today');
jeu.emit('newgamer', 'player2', 34);
jeu.emit('sendra', 'Albert');
jeu.emit('albert', 'Manovosoa');
jeu.emit('david', 'Jasmin');