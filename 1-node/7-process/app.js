const process = require('process');


console.log(process.execPath);  //현재 실행되고 있는 노드의 위치
console.log(process.version);  // 노드의 버전
console.log(process.pid);  //프로세서 아이디
console.log(process.ppid);  //프로세서 부보의 아이디
console.log(process.platform);  //플랫폼에 대한 정보
console.log(process.env);  //컴퓨터에 저장된 환경변수에 대한 정보
console.log(process.uptime()); //얼마나 실행되었는지
console.log(process.cwd()); // 현재 실행하고 있는 노드의 경로
console.log(process.cpuUsage());  //cpu 사용량

setTimeout(()=> {
  console.log('setTimeOut!');
}, 0);

process.nextTick(()=> {
  console.log('nextTick!');
})
//싱글 쓰레드인 노드환경에서는 오랫동안 반복하는 for문은 위험한 코드이다.
for(let i=0 ; i < 1000; i++){
  console.log('for loop');
}