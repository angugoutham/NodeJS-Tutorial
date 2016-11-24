var process=require('process');

console.log("stdout is writable?"+process.stdout.writable);



process.stdout.write("hello");