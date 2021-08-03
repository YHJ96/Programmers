const s = "()()";

function solution(s){
    let newArr = [...s];
    let answer = [];
    if(newArr[0] === ')') return false;
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] === '(') {
            answer.push('X');
        } else answer.pop();
    }
    if(answer.length > 0) return false;
    return true;
}

console.log(solution(s));