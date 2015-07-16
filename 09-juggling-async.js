var http = require('http');

var completeUrls = {};

var result1;
var result2;
var result3;

var count = 3;

completeUrls[process.argv[2]] = false;
completeUrls[process.argv[3]] = false;
completeUrls[process.argv[4]] = false;

function httpCollect (url, callback) {
    
    var result = '';

    http.get(url, function(response) {

        response.setEncoding('utf8');

        response.on('data', function(data) {

            result += data;

        });

        response.on('end', function(data) {

            count--;
            callback(result);
            onEndHttp(url);
            return;

        });

    });
    
}

function onEndHttp (url) {
    
    completeUrls[url] = true;
    
    //console.log(count);
    
    if(count == 0) {
        
        done();
        
    }
    
}

function done() {
    
    console.log(result1);
    console.log(result2);
    console.log(result3);
    
}

httpCollect(process.argv[2], function(result) {
    
    result1 = result;
    
});

httpCollect(process.argv[3], function(result) {
    
    result2 = result;
    
});

httpCollect(process.argv[4], function(result) {
    
    result3 = result;
    
});
