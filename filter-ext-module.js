var fs = require('fs');
var path = require('path');

module.exports = function(dirName, ext, callback) {
    
   var results = [];
    
   fs.readdir(dirName, function (err, data) {
    
   if(err) callback(err, null);
    
    else {
        
     for (var i=0;i<data.length;i++) {
         
         if(path.extname(data[i]) == '.'+ext) {
             
            results.push(data[i]);
             
         }
         
     }
        
     callback(null, results);
        
    }
    
});
    
};