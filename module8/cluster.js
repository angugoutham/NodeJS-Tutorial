var cluster=require('cluster');
var http=require('http');
var numWorkers=2;


if(cluster.isMaster){
    //fork workers 
    for(var i=0;i<numWorkers;i++){
        console.log("masster about to fork workers ");
        
        cluster.fork();
        

    }
    
cluster.on('fork',function(worker ){
    
    console.log("master fork event(worker id:"+worker.id);
    
});    
   cluster.on('online',function(worker ){
    
    console.log("master online event(worker id:"+worker.id);
    
}) ;


cluster.on('listening',function(worker,address ){
    
    console.log("master listening  event(worker id:"+worker.id+"pid+"+worker.process.id +"address"+address.address+"port numebr:"+address.port);
    
})    ;
cluster.on('exit',function(worker,code,signal ){
      
    console.log("master exit event(worker id:"+worker.id);
 });
    

}
else
{
    
    //workers can share tcp connection in this case it is using httpserver connection
    var count=0;
  console.log("worker process ready with worker id+"+cluster.worker.id);
        
    http.createServer(function(req,res){
 res.writeHead(200);
 count++;
 console.log("worker #"+cluster.worker.id+"is incrementing count to "+count);
 res.end("hello world from worker #"+cluster.worker.id+"(pid:"+cluster.worker.id+"with count /n "+count);


if(count==3){
    
    cluster.worker.destroy();
}
 }).listen(process.env.PORT,process.env.IP);
           
}
