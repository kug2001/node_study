const process = require('process');

//비동기 코드에 대한 콜백이 실행되는 우선순위에 대해;

console.log('code1');
setTimeout(()=> {
  console.log('time out!');
}, 0);

console.log('code2');
setImmediate(()=> {
  console.log('immediate!');
});

console.log('code3');
process.nextTick(()=> {
  console.log('nextTick!');
});
