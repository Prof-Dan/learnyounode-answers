var fs = require('fs');
var path = require('path');

var ext = process.argv[3];

ext = '.' + ext;

fs.readdir(process.argv[2], function (err, data) {
    
   if(err) return;
    
    else {
        
     for (var i=0;i<data.length;i++) {
         
         if(path.extname(data[i]) == ext) {
             
            console.log(data[i]); 
             
         }
         
     }
        
    }
    
});