var fun=require('./MathFun');

process.on('message',function(m){
    if(m.cmd=='double')
    {
        console.log("i was asked to double the number "+m.number);
        fun.evenDoubler(m.number,function(error,result){
            process.send({answer:result});
            
        });
    }
    else if(m.cmd==='done'){
        process.exit();
    }
        
    
    
});