const n = 123;

function solution(n) {
    const newNum = `${n}`;
    let answer = [...newNum];
    answer = answer.map((item) => parseInt(item));
    answer = answer.reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution(n));