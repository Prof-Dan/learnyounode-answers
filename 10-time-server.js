var net = require('net');

var port = process.argv[2];

var server = net.createServer(function (socket) {

  var date = new Date();

  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();

  if(month < 10) month = '0' + month;
  if(day < 10) day = '0' + day;
  if(hour < 10) hour = '0' + hour;
  if(minute < 10) minute = '0' + minute;

  var data = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;

  socket.write(data);
  socket.end('\n');

});

server.listen(port);
