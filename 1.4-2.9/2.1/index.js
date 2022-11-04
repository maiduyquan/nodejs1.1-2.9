var http = require('http'),
    url = require('url'),
    server = http.createServer();

server.on('request',function(req,res) {
    console.log("--incoming");
    var incomingUrl = url.parse(req.url,true);
    console.log(incomingUrl);

    if(incomingUrl.path === '/hello'){
        res.writeHead(200,{'Content-type':'Text/plain'});
        res.end('Hello World');
    }else if(incomingUrl.path === '/goodbye'){
        res.writeHead(200,{'Content-type':'Text/plain'});
        res.end('Goodbye World');
    }else {
        res.writeHead(200,{'Content-type':'Text/plain'});
        res.end('Resource not found');
    }
    // res.writeHead(200,{'Content-type':'Text/plain'});
    // res.end('Hello World');
});

server.listen(9000);