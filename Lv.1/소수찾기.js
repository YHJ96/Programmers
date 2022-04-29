// 에라토스테네스의 체 사용
const n = 10;

function solution(n) {
    let answer = [0, 0];
    for(let i = 2; i <= n; i++) {
        answer.push(i);
    }

    for(let j = 2; j <= n; j++) {
        if(answer[j] === 0) continue;
        for(let k = j * 2; k <= n; k += j) {
            answer[k] = 0;
        }
    }
    answer = answer.filter((item) => item !== 0);
    answer = answer.length;
    return answer;
}

console.log(solution(n));