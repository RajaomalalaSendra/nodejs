/* coté serveur*/
http = require("http");

const listener = 8888;
httpServer = http.createServer(function(req, res) {
    console.log("Un utilisateur est sur le serveur!!!");
    res.end("Hello Every body");
});

io = require("socket.io").listen(httpServer);
httpServer.listen(listener);
console.log("It is server at the localhost:"+listener);

/* variable locale et fonction unique à chaque utilisateur*/

io.sockets.on("connection", function(socket) {
    console.log("Un nouveau utilisateur!!");
    /* reçu de l'envoie du client */
    socket.on('login', function(user){
        console.log(user);
    })
});