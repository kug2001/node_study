function hello() {
  console.log(this);
  console.log(this === global); //함수 안에서는 글로벌을 가르킨다 
}
hello();

class A {
  constructor(num){
    this.num = num;
  }
  memberFunction () {
    console.log('---- class -----');
    console.log(this);
    console.log(this === global); //클래스에서는 클래스 내부 인스턴스를 가르긴다.
  }
}
const newClass = new A(10);
newClass.memberFunction();

console.log('---- Global Scope -----');
console.log(this);
console.log(this === global);  //false
console.log(this === module.exports); //true  //함수도, 클래스도 아닌 밖에서는 module.exports를 가르킨다.