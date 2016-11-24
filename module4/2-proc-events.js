
process.stdin.resume();
process.stdin.setEncoding('utf8');

/*process.stdout.write(process.pid);*/
process.stdin.on('data',function(chunk)
{
    process.stdout.write(chunk);
});


process.stdin.on('end',function(){
    process.stderr.write('end');
});

process.stdin.on('SIGTERM',function()
{
    
    process.stderr.write('why the fuck are trying to kill me you son of the bitch!');       
});
console.log(process.pid);
