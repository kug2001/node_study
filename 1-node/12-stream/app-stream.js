const fs = require('fs');

const readStream = fs.createReadStream('./box.avi', {
  // flags?: string | undefined;
  // encoding?: BufferEncoding | undefined;
  // fd?: number | promises.FileHandle | undefined;
  // mode?: number | undefined;
  // autoClose?: boolean | undefined;
  // emitClose?: boolean | undefined;
  // start?: number | undefined;
  // highWaterMark?: number | undefined; //한번에 얼마만큼의 데이터를 불러 올지 결정
  highWaterMark : 16, // default 64Kbytes
  encoding : undefined,
});
readStream
.on('open', (fd) => {
  console.log('오픈',fd);
})
.on('data', (chunk) => {
  console.log(chunk);
})
.on('error', (err) => {
  console.error(err);
})
.on('close', () => {
  console.log('종료되었습니다');
})