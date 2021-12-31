const fs = require('fs'); //파일 시스템의 약자이다.

//3가지 형태의 비동기 코드가 있다.
//rename(...., callback(err, data));
//try {renameSync(....) } catch(e) { }; 이와 같은 형태는 동기적으로 실행되므로 가급적 사용을 피한다.
//promise.rename().then().catch();

// fs.renameSync('./text1.txt', './new-text.txt'); //존재하지 않는 파일로 인해, 노드 서버가 죽어버린다.
// console.log('node'); //이것이 출력되지 않음

//동기적인 방법을 에러 핸들링 하는 코드
try{
  fs.renameSync('./text.txt', './new-text.txt');
  console.log('성공');
}
catch(err){
  // console.log(err);
  console.log('존재하지 않는 파일입니다');
}
console.log('hello');

//비동기 적인 방법
fs.rename('./new-text.txt', './text.txt', (err)=> {
  if(err){
    console.log('존재하지 않는 파일입니다');
    return;
  }
  console.log('성공');
})
console.log('hello');

fs.promises.rename('./new-text.txt', './text.txt')
.then(console.log())
.catch(console.error());