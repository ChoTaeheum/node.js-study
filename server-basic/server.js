// 1. 서버 사용을 위해서 http 모듈을 http 변수에 담는다. (모듈과 변수의 이름은 달라도 된다.)
const http = require('http');   // http 모듈 가져오기 (import)

// 2. http 모듈로 서버를 생성한다.
// 서버를 생성한 후, 사용자로부터 http 요청이 들어오면 function 블럭 내부의 코드를 실행해서 응답한다.
const server = http.createServer(function(request, response) {
  response.writeHead(200, {"content-type":"text/html"});  // 서버에서 보내주는 컨텐츠의 타입이 텍스트, html rqkt
  response.end("hello node.js!");    // html 형태로 화면에 출력
});

// 3. listen 함수로 8080 포트를 가진 서버를 실행한다. 서버가 실행되면 "Server is running..."을 출력
server.listen(8080, function() {
  console.log("Server is running...")
});