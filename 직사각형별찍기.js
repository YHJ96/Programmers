const n = 5;
const m = 3;

function solution(n, m) {
    let answer = '';
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            answer += '*'
        }
        answer += '\n';
    }
    return answer;
}