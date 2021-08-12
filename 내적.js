const a = [1,2,3,4];
const b = [-3,-1,0,2];

function solution(a, b) {
    let answer = [];
    for(let i = 0; i <  b.length; i++) {
        answer.push(a[i] * b[i]);
    }
    answer = answer.reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution(a, b));