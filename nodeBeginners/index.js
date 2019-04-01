/* 
* import the server
* import the router also
* import the requestHandlers
*/
var server = require ("./server");
var router = require ("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);