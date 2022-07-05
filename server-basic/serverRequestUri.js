const http = require("http");
const url = require("url");

const server = http.createServer(function(request, response) {
  // 1. 실제 요청한 주소전체를 콘솔에 출력
  console.log(request.url);
  const parsedUrl = url.parse(request.url);

  // 2. parsing된 url 중에 서버 URI에 해당하는 pathname만 따로 저장
  const resource = parsedUrl.pathname;
  console.log("resource path=%s", resource);

  // 3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메세지를 클라이언트에 전달
  if (resource == "/address") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("서울특별시 강남구 논현 1동 111");
  }
  else if (resource == "/phone") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("02-1234-5678");
  } 
  else if (resource == "/name") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hong Gil Dong");
  }
  else {
    response.writeHead(404, {"Content-Type": "text/html"});
    response.end("404 Page Not Found")
  }
});

// 4. 서버 포트 80번으로 변경
server.listen(80, function() {
  console.log("Server is running...");
});