const module1 = require("./customModuleTimer");

// 1. module1 내부에서 선언된 timer 객체를 통해 tick 이벤트를 캐치하고,
// 이벤트 발생 시마다 현재시간을 출력
module1.timer.on("tick", function(time) {
  const time1 = new Date();   // 2. 현재시간을 가져오기 위한 Date 객체 생성
  console.log("now:" + time1);
});