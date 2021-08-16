// Math 함수 안쓰고 사용해보기

const n = 11;

function solution(n) {
    let answer = Math.sqrt(n);
    answer = (answer + 1) * (answer + 1);
    if(answer !== parseInt(answer)) return -1;
    return answer;
}

console.log(solution(n));