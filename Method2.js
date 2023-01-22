//method
let boy = {
    name : 'Mike', 
    showName : function(){
        console.log(this.name)
    }
};

boy.showName();

let man = boy; //이런식으로 객체를 다른 곳에 할당해서 두가지 변수이름으로 접근가능 

man.name = 'TOM'   //객체를 새론만드는게 아님!!! 한 객체에 이름표만 2개
console.log(boy.name) // 고로 이때 boy의 프로퍼티값이 바뀌어서 Tom을 출력함
man.showName(); 
boy = null; //이러면 man로만 접근가능
man.showName(); // ??에러남 왜냐, boy의 프로퍼티가 모두 사라졌기 때문에 

//이 때 boy 내 console.log(boy.name) 을  console.log(this.name)으로 변경하면
//this가 있는 객체자체를 신경씀(객체명 신경안씀) 고로 출력됨

// Mike Tom Tom Tom

//고로 메소드에서는 객체명을 직접 써주는 것보다 this 활용많이 할 것



