let answer = [];
for (let i = 0; i < 3; i++) {
  const randomNumber = Math.floor(Math.random() * 10);
  if (answer.indexOf(randomNumber) === -1) {
    answer.push(randomNumber);
  } else {
    i--;
  }
}
console.log(answer);

let count = 0;
let strike = 0;
let ball = 0;

while (true) {
  //숫자 입력
  let input = prompt("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요");
  let inputArray = input.split("");
  strike = 0;
  ball = 0;
  count++;

  for (var j = 0; j < 3; j++) {
    for (var k = 0; k < 3; k++) {
      if (answer[j] == inputArray[k]) {
        if (j === k) {
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }

  if (strike === 3) {
    console.log(`${count - 1}만에 맞히셨습니다.
                  게임을 종료합니다.`);
    break;
  } else {
    console.info(count + "번째 시도 : " + inputArray.join(""));
    console.info(ball + "B" + strike + "S");
  }
}
