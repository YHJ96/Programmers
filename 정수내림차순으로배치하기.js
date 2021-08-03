const n = 118372;

function solution(n) {
    let answer = `${n}`;
    answer = [...answer]
    answer = answer.sort((a,b) => b - a);
    answer = answer.reduce((acc, curr) => acc + curr);
    return parseInt(answer);
}

console.log(solution(n));