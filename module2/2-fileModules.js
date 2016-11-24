var mathfun=require("./MathFun");


var processResults=function(err,results,time){
    
    if(err)
    {
        
        console.log(err);
    }
    else{
        
        console.log("the results are"+results+"time taken"+time+"in ms");
        
        
    }
};

for(var i=0;i<10;i++){
    
    console.log("calling evendoublewith parameerte "+i);
    
    mathfun.evenDoubler(i,processResults);
}
console.log("------");
console.log("the foo varaiable from mathfun is"+mathfun.foo);
console.log("the max time is "+mathfun.maxTime);
console.log(mathfun.foo);

