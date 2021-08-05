//테스트케이스 5,6번 에러

const s = "1234";

function solution(s) {
    let answer = [...s];
    answer = answer.map(item => parseInt(item));
    answer = answer.reduce((acc, curr) => acc + curr);
    if(isNaN(answer) && (s.length !== 4 || s.length !==6)) return false;
    else return true;
}

console.log(solution(s));