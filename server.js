

var http = require('http');

var app = require('./app')();






var port = process.env.PORT || 3046; 		// set our port

http.createServer(app).listen(port, function () {
  console.log("Server ready at http://localhost:" + port);
});

