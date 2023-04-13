function solution(str) {
  let sum = 0; //sum초기화
  let count = 0; //count값 초기화
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "O") {
      //O일 경우 count를 1씩 증가
      count++;
    } else {
      //X일 경우 count를 0으로 초기화
      count = 0;
    }
    sum += count;
  }
  return sum;
}
let str = "OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str));

/*
function solution(str) {
  let sum = 0; //sum초기화
  let count = 1; //count값 초기화
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "O") {
      //o일 경우 count를 1씩 증가시키며 sum에 더해줌
      sum += count;
      count++;
    } else {
      //x일 경우 count를 초기화
      count = 1;
    }
  }
  return sum;
}
let str = "OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str));
*/
