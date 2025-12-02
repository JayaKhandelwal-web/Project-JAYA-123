

const fs = require ('fs');
const readableStream = fs.createReadStream('input.txt','utf8')
const writeableStream= fs.createWriteStream('output.txt');
readableStream.pipe(writeableStream);
writeableStream.on('finish',()=>{
    console.log("file copy complteddd........");

});
readableStream.on('data ',(chunks)=>{
    console.log("huijhi",chunks);
})
writeableStream.on('error',(error)=>{
    console.log("my error",error);
})
