var Resource=require("./resource");

//event emitter demonstration to object intilaization;
var r=new Resource(455);

r.on('start',function(){
    
    console.log("geloo");
});

r.on('data',function(d){
    
    console.log("i recieveed"+d);
});
r.on('end',function(d){
    
    console.log("i am done"+d);
});