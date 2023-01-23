// 배열은 몇가지 메소드를 가지고 있음

//1. push / pop : 배열 끝에 추가 / 끝 배열 삭제

let days = ['월','화','수']
days.push('목','금')  // 월화수목금
days.pop()           // 월화수목
console.log(days)

//2. unshift / shift :배열 제일 앞 추가 / 제거
//얘는 여러 요소를 한번에 수정가능..?

days.unshift('토','일')    // 토일월화수목 
days.shift()               // 일월화수목
console.log(days)



//push pop 과 shift unshift 차이는 뭐노...?  