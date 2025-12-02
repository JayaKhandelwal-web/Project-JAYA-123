const fs = require ('fs');
const zlib = require('zlib');
// create pipeline to read file , compress it ,write to new file
fs.createReadStream('myfile.txt');
.pipe(zlib.createGzip()) //compress data
.pipe(fs.createWriteStream('dest.txt.gz'))
.on('finish',()=>{
    console.log('file compressed........')
})