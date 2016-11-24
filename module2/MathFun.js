var Maxtime=1000;

//if inut is even it return double 
//if input is odd it retruns error message
//(call takes random amount of time)
var evenDoubler=function(v,callback){
    {
    var waitime=Math.floor(Math.random()*Maxtime+1);
    
    if(v%2){
    setTimeout(function(){
        callback(new Error("odd input"));
    },waitime);
        
        
    }
else
{
    
    setTimeout(function() {
        callback(null,v*2,waitime)
    },waitime);
}
        
    }
};
module.exports.evenDoubler=evenDoubler;
module.exports.foo='bar';