var request=require('request');

var s=request('https://www.google.com');
s.on('data',function(chunk){
    console.log("data>>>>>"+chunk);
});

s.on('end',function(){
    
    console.log("end>>>>");
});