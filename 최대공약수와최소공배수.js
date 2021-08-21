// 유클리드 호제법 사용

const n = 3;
const m = 12;

function solution(n, m) {
    let n1 = n;
    let m1 = m;
    let remainder = 0;
    let max = 0;
    let min = 0;
    for(;;) {
      remainder = n1 % m1;
      n1 = m1;
      m1 = remainder;
      if(remainder === 0) {
        max = n1;
        break
      }
    }
    min = (n * m) / max;
    return [max, min];
}

console.log(solution(n, m));