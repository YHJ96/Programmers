const s = "Zbcdefg"

function solution(s) {
    let answer = [...s];
    answer = answer.sort().reverse();
    answer = answer.reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution(s));