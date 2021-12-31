const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt', {
  highWaterMark : undefined,
  encoding : undefined,
})
writeStream.on('finish', () => {
  console.log('Finish!!!');
})

writeStream.write('hello');
writeStream.write('my name is');
writeStream.write('young');
writeStream.end();

