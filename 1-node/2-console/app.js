//log Level
console.log('log'); //개발
console.info('info');  //정보
console.warn('warn');  //경보
console.error('error');  //에러, 사용자 에러, 시스템 에러

//assert 첫번째 인자가 true가 아닐 때만 로그를 띄운다.
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

//print object 
const student = {
  name : 'jayden',
  age : 20,
};
console.log(student);
console.table(student);
console.dir(student);

//measuring time 같은 레이블을 지정한 뒤 시작과 끝의 레이블이 완료되면 얼마나 시간이 걸렸는지 로그를 찍어준다.
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

//counting 이 해당 함수가 몇번 호출 되었는지 알 수 있다.
//카운트를 초기화 하고 있다면 console.countReset('같은 레이블')을 이용하면 된다.
function a() {
  console.count('a function');
}
a();
a();


//trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
f1();

