const n = 10; 

function solution(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return (solution(n-1) + solution(n-2)) % 1234567;
}

console.log(solution(n));