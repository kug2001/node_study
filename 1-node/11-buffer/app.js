// 버퍼란 무엇이냐? 고정된 사이즈의 메모리 덩어리이다. Fixed-size chuck of memory
// 숫자 배열 형태를 갖고 있고, 바이트 단위의 데이터이다. Array of integers, byte of data

const buff = Buffer.from('Hi'); //버퍼를 만든다.
console.log(buff);
console.log(buff.length);
console.log(buff[0]);
console.log(buff[1]);
console.log(buff.toString());

//Creat
const buff2 = Buffer.alloc(2); //2개의 메모리 초기화 된 버퍼를 만든다.
buff2[0] = 72;
buff2[1] = 105;
console.log(buff2.toString());

const buff3 = Buffer.allocUnsafe(2) //2개의 메모리 초기화가 안된 버퍼를 만든다.
buff.copy(buff3)
console.log(buff3);

//concat 여러가지 버퍼를 모을 수 있다.
const newBuff = Buffer.concat([buff, buff2, buff3]);
console.log(newBuff.toString());