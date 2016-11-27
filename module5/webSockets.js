//node server side code binded with websockets 

//webserver and socket io server combined

var http=require('http');
var socketio=require('/home/ubuntu/.nvm/versions/node/v4.6.1/lib/node_modules/socket.io');



var fs=require('fs');

//handler gives you index.html
var handler=function(req,res){
    
    fs.readFile(__dirname +'/index.html',function(err,data){
        
        if(err){
            
            res.writeHead(500);
            return res.end("error laoding html page ");
            
        }
        else
        {
            res.writeHead(200);
            res.end(data);
            
            
        }
        
    });
    
    
};


var app=http.createServer(handler);
var io=socketio.listen(app);
//socket io adds itself to the http server created .

io.sockets.on('connection',function(socket){
   setInterval(function(){
       var timestamp=Date.now();
       console.log("emiited"+timestamp);
       socket.emit('timer',timestamp);
       
       
       
   },200) ;
    
    socket.on('submit',function(data){
        
        console.log("submitted"+data);
 });
    
});
app.listen(process.env.PORT);

console.log("server started");