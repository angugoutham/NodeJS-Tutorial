var request=require('request');

 request('https://www.google.com/',function
 (error,response,body){

     if((!error)){
         
         console.log(body);
          console.log('finished lpoading');
     }
  
 });
 