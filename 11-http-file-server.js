var http = require('http');
var fs = require('fs');

var port = process.argv[2];

var server = http.createServer(function (request, response) {

  var stream = fs.createReadStream(process.argv[3]);

  stream.pipe(response);

});
server.listen(port);
