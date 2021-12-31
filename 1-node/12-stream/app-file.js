const fs = require('fs');

// 현재 파일이 4.8MB 정도 되는데, 만약에 메모리 용량보다 크다면 이 코드는 위험하다.
const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (err, data) => {
  fs.writeFile('./file2.txt', data, ()=>{})
  //cal Memory
  const afterMem = process.memoryUsage().rss;
  const diffMem = afterMem - beforeMem;
  const consumed = diffMem / 1024 / 1024;
  console.log('Consumed Memory : ', consumed, 'MB');
})