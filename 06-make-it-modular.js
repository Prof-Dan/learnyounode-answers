var filterExtModule = require('./filter-ext-module');

filterExtModule(process.argv[2], process.argv[3], function (err, data) {
    
    if(err) return;
    
    else {
        
        for(var i=0;i<data.length;i++) {
            
            console.log(data[i]);
            
        }
        
    }
    
});