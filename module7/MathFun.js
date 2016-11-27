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

var evenDoublersync=function(v){
    
    if(v%2){
        throw (new Error("odd input"));
    }
    else{
        return (v*2);
    }
};
module.exports.evenDoubler=evenDoubler;
module.exports.evenDoublerSync=evenDoublersync;
module.exports.foo='bar';