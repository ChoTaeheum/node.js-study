const eventEmitter = require("events");
// 1. setInterval 함수가 동작하는 interval 값을 설정합니다. 1초에 한번씩 호출
const sec = 1;

// 2. timer 변수를 eventEmitter로 초기화
exports.timer = new eventEmitter();

// 3. javascript 내장함수인 setInterval을 사용해서 1초에 한번 씩 timer 객체에 tick 이벤트 발생
setInterval(function() {
  exports.timer.emit("tick");
}, sec*1000);

