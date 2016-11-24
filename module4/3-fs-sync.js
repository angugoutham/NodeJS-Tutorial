var fs=require('fs');


if(fs.existsSync('temp'))
{
    console.log('removing existing directory');
    if(fs.existsSync('temp/test.txt')){
      fs.unlinkSync('temp/test.txt');
    }
      fs.rmdirSync('temp/test.txt');
}

fs.mkdirSync('temp');

if(fs.existsSync('temp'))
{
    process.chdir('temp');
    fs.writeFileSync('one.txt','this is the file that is written newly');
    fs.renameSync('one.txt','test.txt');
 console.log("file size"+fs.statSync('test.txt').size + 'bytes');
 console.log("file contents"+fs.readFileSync('test.txt').toString());
    
}