var request=require('request');
var zlib=require('zlib');

/*var s=request('https://www.google.com');

s.pipe(process.stdout);*/

var fs=require('fs');

var s=request('https://www.google.com').pipe(process.stdout);

/*var s=request('https://nodejs.org/api/stream.html').pipe(fs.createWriteStream('google.html'));*/
var s=request('https://nodejs.org/api/stream.html').pipe(zlib.createGzip()).pipe(fs.createWriteStream('google.html.gz'));