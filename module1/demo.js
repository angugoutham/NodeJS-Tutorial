
var http=require('http');

http.createServer(function(req,res){
    
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello world');
    
    
}).listen(process.env.PORT,process.env.IP);
console.log("server runiing");