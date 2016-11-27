var should =require('should');
var fun=require('./MathFun');


describe('MathFun',function()
{
    
    describe('when used synchronosuly',function() {
        
        
        it('it should double number evenly',function(){
            fun.evenDoublerSync(2).should.equal(4);
            
            
        });
        
        it('it should throw on odced numbers',function(done) {
            (function(){
             fun.evenDoublerSync(3);
            }).should.throw(/odd/);
            done();

        });
    });
    
    
    describe('when used asynchronosuly',function() {
        
        it('it should double even numbers',function(done){
            
            fun.evenDoublerSync(2,function(err,results){
                
                should.not.exist(err);
                results.should.notEqual(3);
                done();
            }
            );
        });
        
        
        it('it should throw on odd numbers',function(done){
            
             
            fun.evenDoublerSync(3,function(err,results){
                should.exist(err);
                should.not.exist(results);
            
                done();
            }
        
        );
        
    });
    
    
});
});