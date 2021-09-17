const n = 15;

function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++) {
        let count = i;
        while(true) {
            n -= count;
            if(n === 0) {
                answer++;
                break;
            } else if(n < 0) {
                break;
            }
            count++;
        }
    }
    return answer;
}

console.log(solution(n));