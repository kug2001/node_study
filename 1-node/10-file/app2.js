const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf-8')
.then((res)=> console.log(res))
.catch((err)=> console.log(err))

// writing a file
fs.writeFile('./text.txt', 'Hello I am young!')
.catch((err)=> console.log(err))

// writing a file
fs.appendFile('./text.txt', 'I love you!')
.then(()=> {
  // copy 비동기적이므로 순서를 보장 받지 못하므로 이렇게 처리하는게 안전.
  fs.copyFile('./text.txt', './text-copy.txt').catch(console.error);
})
.catch((err)=> console.log(err))

//folder

fs.mkdir('./newFolder')
.then((res) => console.log(res))
.catch(console.error);

fs.readdir('./', 'utf-8')
.then(console.log)
.catch(console.error)
