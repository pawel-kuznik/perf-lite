
// we will need express
var express = require('express');

// create a server
var server = express();

// configure the server
server.use(express.static(__dirname + '/public'));

// listen on 3000
server.listen(3000);
