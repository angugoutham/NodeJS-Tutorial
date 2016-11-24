var os=require('os');

var toMb=function(f){
    
    return (Math.round((f/1024/1024)*100)/100);
    
}

console.log("host"+os.hostname());
console.log("15 min load average"+os.loadavg([2]));
console.log("free memory"+toMb(os.freemem())+"total Memory"+toMb(os.totalmem()));