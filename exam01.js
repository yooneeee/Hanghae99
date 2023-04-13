function solution(num) {
  let answer = 0;
  let change = 1000 - num; //거스름돈
  const coins = [500, 100, 50, 10]; //갖고 있는 동전종류(잔돈)

  for (let i = 0; i < coins.length; i++) {
    //잔돈만큼 반복
    let mok = Math.floor(change / coins[i]); //잔돈 종류가 더 큰 수부터 change를 나누었을 때 몫을 구함
    change = change - mok * coins[i]; // 거스름돈에서 해당 동전의 금액 x 몫을 뺌
    answer += mok;
  }
  return answer;
}
let num1 = 160;
console.log(solution(num1));

/*
let answer = 0, input = 1000 - inputs;

while(input >= 500){
    input -= 500;
    answer++;
}
while(input >= 100){
    input -= 100;
    answer++;
    
}
while(input >= 50){
    input -= 50;
    answer++;
}
while(input >= 10){
    input -= 10;
    answer++;
}
while(input >= 5){
    input -= 5;
    answer++;
}
while(input >= 1){
    input -= 1;
    answer++;
}



console.log(answer);
*/
