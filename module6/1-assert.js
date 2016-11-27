var MathFun=require('./MathFun');
var assert=require('assert');

assert.equal(MathFun.evenDoublerSync(2),4);


assert.throws(function()
{
    
    MathFun.evenDoublerSync(3);
},/odd/);

MathFun.evenDoubler(2,function(err,results){
    
    assert.ifError(err);
    assert.equal(results,4,"math function fialing");
    
    
}
);
MathFun.evenDoubler(3,function(err,results){
    
 assert.notEqual(err,null);
    
}
);