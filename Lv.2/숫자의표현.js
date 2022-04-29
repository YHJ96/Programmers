const n = 15;

// 시간초과
function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++) {
        let count = i;
        let num = n;
        while(true) {
            num -= count;
            if(num === 0) {
                answer++;
                break;
            } else if(num < 0) {
                break;
            }
            count++;
        }
    }
    return answer;
}

console.log(solution(n));