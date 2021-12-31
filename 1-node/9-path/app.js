const path = require('path');

//POSIX (Unix: Mac, Linux) : /Users/temp/filename.html
//Window : C:\\temp\\filename.html

console.log(__dirname);
console.log(__filename);

//운영체제 마다 패스 경로의 형식이 다르기 때문에 글로벌로 디렉토리 이름과 파일 이름을 받아오면 오류가 생길 수 밖에 없다. 이것을 쉽게 대응 하기 위해 path 모듈을 사용한다.

console.log(path.sep); //경로 구분자
console.log(path.delimiter); //환경변수 구분자

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname
console.log(path.dirname(__filename));

//extention
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.base;
parsed.dir;
parsed.name;
parsed.ext;

//to string
const str = path.format(parsed);
console.log(str);

//isAbsolute 절로경로 여부
console.log('isAbsolute', path.isAbsolute(__dirname));  //절대경로
console.log('isAbsolute', path.isAbsolute('../')); //상대경로

//normalize 잘못된 경로포맷을 수정해주는 모듈 
console.log(path.normalize('./folder/////////sub'));

//join
console.log(__dirname + path.sep + 'image'); //새로운 경로를 만드는 경우
console.log(path.join(__dirname, 'image')); //위와 동일한 결과