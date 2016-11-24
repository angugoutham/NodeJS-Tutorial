var EventEmitter=require('events').EventEmitter;



// calling events throught function call
var  getResource=function(c){
    
    var e=new EventEmitter();
    process.nextTick(function(){
        
      var count=0;
      e.emit('start');
      var t=setInterval(function(){
          
          e.emit('data',++count);
          {
              
              if(count==c){
                  
                  
                  e.emit('end',count);
                  clearInterval(t);
              }
          }
          
          
      },10);
        
        
        
       return(e) ;
    });
    
    
    
    
};
 var r=getResource(5);
/*
r.on('start',function(){
    
    console.log("geloo");
});*/
/*r.on('start',function(){
    console.log("started");
});
r.on('data',function(d){
    
    console.log("i recieveed"+d);
});
r.on('end',function(d){
    
    console.log("i am done"+d);
});*/
r.on('end',function(d){
    
    console.log("i am done"+d);
});