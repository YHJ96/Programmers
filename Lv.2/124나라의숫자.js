const n = 4;

function solution(n) {
  const answer = [];
  // 숫자가 0이면 정지
  while (n !== 0) {
    // 3진법으로 진행하며 3으로 나누어지면 조건 실행
    if (n % 3 === 0) {
      // 4 push
      answer.push(4);
      // 몫을 n에 대입
      n = parseInt(n / 3);
      // - 1
      n -= 1;
    } else {
      // 나머지를 push
      answer.push(n % 3);
      // 몫을 n에 대입
      n = parseInt(n / 3);
    }
  }
  // 정답 정제
  return answer.reverse().join("");
}

console.log(solution(n));
