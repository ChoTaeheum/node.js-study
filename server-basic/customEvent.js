// node.js에서 이벤트는 events라는 내장모듈에 정의되어 있다.
// 1. 이벤트가 정의돼 있는 events 모듈 생성.
const eventEmitter = require("events");

// 2. 생성된 이벤트 모듈을 사용하기 위해 customObject로 초기화
const customObject = new eventEmitter();

// 3. events 모듈에 선언되어 있는 on() 함수를 재정의하여 "call" 이벤트 처리
customObject.on("call", () => {
  console.log("called events!")
});

// 4. call 이벤트를 강제로 발생
customObject.emit("call");
