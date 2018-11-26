const http = require('http');

const routes = require('./routes');

/* function rqListener (request, response) {
    request.write()
}
const server = http.createServer(rqListener);*/
/* another way is:
const server = http.createServer( function(request, response) {
        ..... all the core of the function .......
});
*/
/* Here also you can use:
const server = http.createServer( (request, response) => {
    All the function and the variable inside the function is over here you can write it.....
});
*/
const server = http.createServer(routes);
server.listen(3000);
console.log('The server is running at the localhost:3000');