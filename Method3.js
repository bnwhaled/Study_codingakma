// 객체 화살표함수
// Method2 boy를 화살표함수로 바꾸면?
let boy = {
    name : 'Mike', 
    sayThis: () => {
        console.log(this);
    }
};

boy.sayThis(); // 객체가 반환됨

//여기서 화살표함수로 바꾸면
//this는 boy의 객체들을 가르키지않고 전역객체(window)를 가리키기 때문에 // {}반환 
//화살표함수 쓰지말 것.  

//gggggg