const module1 = require("./customModule");

// 1. formatted 특수문자 %d를 사용해서 module.sum() 에서 리턴된 숫자값을 출력
console.log("sum = %d", module1.sum(100));

// 2. formatted 특수문자 %s를 사용해서 module.var1의 문자값을 출력
console.log("var1 = %s", module1.var1);

// module은 예약어인 것 같음