const http = require("http");
const querystring = require("querystring");

const server = http.createServer(function(request, response) {
  // 1. post로 전달된 데이터를 담을 수 있는 변수
  let postdata = "";

  // 2. request 객체에 on() 함수로 "data" 이벤트를 연결
  // on() 함수를 통해 event를 등록하고 해당 event가 발생하는 시점에 로직을 실행하는 구조
  request.on("data", function(data) {
    // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
    // request 객체에서 data 이벤트가 발생하면 data 변수를 callback 함수에 담아서 내부 로직을 실행
    postdata = postdata + data;
  });

  // 4. request 객체에 on() 함수로 "end" 이벤트를 연결
  request.on("end", function() {
    // 5. end 이벤트가 발생하면 (end는 한번만 발생한다.) 3번에서 저장해둔 postdata를 querystring으로 객체화
    // request 객체에서 end 이벤트가 발생하면 내부 로직을 실행. end 이벤트는 callback 시에 전달되는 값 없음
    const parsedQuery = querystring.parse(postdata);

    // 6. 객체화된 데이터를 로그로 출력
    console.log(parsedQuery);

    // 7. 성공 HEADER와 데이터를 담아서 클라이언트에 응답처리
    response.writeHead(200, {"Content-Type":"text/html"});
    response.end("var1 is = " + parsedQuery.var1);
  });

});

server.listen(8080, function() {
  console.log("Server is running...")
})