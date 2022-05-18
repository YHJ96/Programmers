const n = 4;

function solution(n) {
    let answer = [0, 1, 2];
    // 경우의 모든 가지의 수는 전 가지의 수와 전전 가지의 수를 더해준다.
    for(let i = 3; i <= n; i++) answer[i] = answer[i - 1] + answer[i - 2] % 1234567;
    // 정답 정제
    return answer[n] % 1234567;
}

console.log(solution(n));