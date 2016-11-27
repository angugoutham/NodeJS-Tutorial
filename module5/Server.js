var fs =require('fs');
var http=require('http');
//create a server and trying to fetch a file from the local directory


http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    
    if(req.url=='/file.txt')
    {
  
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
              console.log("comming here ");
    }
    else
    {
    res.end("bad url:");
    
    }
}).listen(process.env.PORT ,process.env.IP);

console.log("server running");