var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var str = buffer.toString();

var lines = str.split('\n');

console.log(lines.length-1);