var http=require('http');

var options={
    host:'www.pluralsight.com',
    port:80,
    path:'/',
    method:'GET'
    
    
    
};

console.log("starting to make request ");
//involking directly by passing url;

var req=http.request('http://www.google.com/',function (response)

//involking by pasiing object 

//var req=http.request(options,function (response){
  
  {  console.log(response.statusCode);
    response.pipe(process.stdout);
    
    
});
req.end();