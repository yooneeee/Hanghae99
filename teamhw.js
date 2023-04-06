let answer = [];
for (let i = 0; i < 3; i++) {
  const randomNumber = Math.floor(Math.random() * 10); // 0 ~ 9 숫자 램던 생성
  if (answer.indexOf(randomNumber) === -1) {
    //indexOf(): string에서 특정 문자열 찾아서 해당 문자열이 '첫 번째로' 나타나는 위치 index 리턴
    answer.push(randomNumber); //indexOf() ===-1: 일치하는 값 x -> answer에 추가
  } else {
    i--;
  }
}
console.log(answer);

let count = 0; // 시행 횟수
let strike = 0; // strike 횟수
let ball = 0; // ball 횟수

while (true) {
  //숫자 입력
  let input = prompt("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요");
  let inputArray = input.split(""); //3자리수 각각 한자리씩 배열로 변환

  //strike, ball 횟수 초기화
  strike = 0;
  ball = 0;
  count++;

  for (var j = 0; j < 3; j++) {
    for (var k = 0; k < 3; k++) {
      if (answer[j] == inputArray[k]) {
        //한 자리씩 비교하면서 숫자 값 일치 여부 확인
        if (j === k) {
          // 같은 숫자의 인덱스(위치) 일치 여부 확인
          strike++; //숫자의 값, 위치 모두 일치 => 스트라이크
        } else {
          ball++; // 숫자의 값만 일치 => 볼
        }
        break; // 반복문 탈출
      }
    }
  }

  if (strike === 3) {
    // 3자리 모두 숫자 값, 위치 일치 => 게임 종료
    console.log(`${count - 1}만에 맞히셨습니다. 
                  게임을 종료합니다.`); // count는 for문 돌기전에 증가하므로 -1해줘야함.
    break; //조건문 탈출
  } else {
    // 일부만 맞추거나 하나도 못맞힘 => 시도 횟수 및 스트라이크, 볼 횟수 알려줌.
    console.log(count + "번째 시도 : " + inputArray.join("")); //join(): 배열의 모든 요소 연결해 하나의 문자열로 만듦.
    console.log(ball + "B" + strike + "S");
  }
}
