const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const fileZip = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(fileZip).pipe(writeStream);
piping.on('finish', ()=> {
  console.log('Done!!!!!');
})