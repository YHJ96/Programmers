const s = "1245";

function solution(s) {
    let answer = [...s];
    answer = answer.map(item => parseInt(item));
    answer = answer.reduce((acc, curr) => acc + curr);
    if(isNaN(answer)) return false;
    if(s.length !== 4 && s.length !==6) return false;
    else return true;
}

console.log(solution(s));