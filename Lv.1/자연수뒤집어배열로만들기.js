const n = 12345;

function solution(n) {
    let answer = `${n}`;
    answer = [...answer];
    answer = answer.reverse();
    answer = answer.map((item) => parseInt(item));
    return answer;
}

console.log(solution(n));