const a = 3;
const b = 5;

function solution(a, b) {
    let answer = [];
    if(a === b) return a;
    let degree = [a,b];
    degree = degree.sort((a,b) => a-b);
    for(let i = 0; i <= (degree[1] - degree[0]); i++) {
        answer.push(degree[0] + i);
    }
    answer = answer.reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution(a, b));