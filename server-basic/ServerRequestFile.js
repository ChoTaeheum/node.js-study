const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  const parsedUrl = url.parse(request.url);
  const resource = parsedUrl.pathname;

  // 1. 요청된 자원이 /hello 이면
  if (resource == "/hello") {
    // 2. hello.html을 읽은 후
    fs.readFile("Hello.html", "utf-8", function (error, data) {
      // 2.1 읽으면서 오류가 발생하면 오류의 내용을 출력
      if (error) {
        response.writeHead(500, { "Content-Type": "text/html" });
        response.end("500 Internal Server Error: " + error);
      }
      // 2.2 아무런 오류가 없이 정상적으로 읽기가 완료되면 파일의 내용을 클라이언트에 전달
      else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      }
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("404 Page Not Found");
  }
});

server.listen(80, function () {
  console.log("Server is running...");
});
