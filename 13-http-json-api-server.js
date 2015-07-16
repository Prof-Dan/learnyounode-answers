var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {

  res.writeHead(200, {'content-type': 'application/json'});

  var reqUrl = url.parse(req.url, true);

  var date = new Date(reqUrl.query.iso);

  if(reqUrl.pathname === '/api/unixtime') {

    var dateObj = {unixtime:date.getTime()};

    res.write(JSON.stringify(dateObj));
    res.end();

  }
  else if(reqUrl.pathname === '/api/parsetime') {

    var dateObj = {hour:date.getHours(), minute:date.getMinutes(), second:date.getSeconds()};
    var jsonDate = JSON.stringify(dateObj);

  //  console.log(jsonDate);

    res.write(jsonDate);
    res.end();

  }

});
server.listen(port);
