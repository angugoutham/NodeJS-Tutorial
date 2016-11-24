var maxTime=1000;





var EventDoubler=function(v,callback)
{
    var waitime=Math.floor(Math.random()*maxTime+1);
 
    if((v%2)){
   setTimeout(function() {
           callback(new Error("odd input"));},waitime);
   }else{
           var result=2*v;
             setTimeout(function(){
 
       callback(null,result,waitime);
     
   },waitime);
   }
       };
       
       


var handleResults=function(err,results,time)
{
    if(err)
    {
        
        console.log("Error:"+err.message);
        
    }
    else
    
    {
        
        console.log("the results are "+results+"time taken"+time+"ms");
    }
    
};


EventDoubler(2,handleResults());
EventDoubler(11,handleResults());
console.log("------");