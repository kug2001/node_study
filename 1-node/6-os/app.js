const os = require('os'); //서버에 대한 정보를 가지고 올때 os모듈을 사용할 수 있다.

//EOL OS에 따른 줄바꿈의 차이 이코드를 통해 mac인지 window PC인지 구분할 수 있다.
console.log(os.EOL === '\n'); //mac
console.log(os.EOL === '\r\n'); //window

