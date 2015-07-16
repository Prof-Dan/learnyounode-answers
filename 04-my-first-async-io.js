var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    
   if(err) return;
    
   else {
       
    var str = data.toString();
       
    var len = str.split('\n');
    
    console.log(len.length-1);
       
   }
    
});