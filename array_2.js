//배열을 쓰는 가장 큰 이유는 반복을 피하기 위해

//for 반복문
let days = ['월','화','수']

for(let i=0; i<days.length; i++){
    console.log(days[i])
}

//for..of 반복문  : for in과 혼동하지마라
//이건 for보다 간편하지만 인덱스를 생성하기 힘들어 상황에 따라 쓸 것
for (let day of days){
    console.log(day);
}
