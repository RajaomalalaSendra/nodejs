// Création de notre todo list en nodejs et de l'express js pour aujourd'hui
var express = require('express');

app = express();

/* On utilise les cookies, les sessions et les formulaires */
//app.use(express.cookieParser())
//app.use(express.session({secret: 'todotopsecret'}))
app.use(express.bodyParser())

.listen(8080)
console.log('The server is running at the port 8080');