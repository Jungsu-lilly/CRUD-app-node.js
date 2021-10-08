var fs= require('fs'); // fs 모듈을 불러옴.

// readFileSync. 실행순서를 알아보자.

/*console.log("A"); // 동기적 처리
var result = fs.readFileSync('syntax/sample.txt','utf-8');
console.log(result);
console.log('C');*/


console.log("A");
 // 비동기적 처리                         // 콜백함수
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result){
  console.log(result);
});
console.log('C');
