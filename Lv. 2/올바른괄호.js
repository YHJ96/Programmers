const s = "()()";

function solution(s){
    let newArr = [...s];
    let answer = [];
    if(newArr[0] === ')') return false;
    // 첫 시작이 ')' 일경우 무조건 성립 실패 예외처리
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] === '(') {
            answer.push('X');
            // 첫시작이 무조건 '(' 성립 answer에 값 넣기
        } else answer.pop();
        // ')'만나면 pop(뺴기)
    }
    if(answer.length > 0) return false;
    // 올바른 괄호이면 배열에 값이 남을수 없음
    return true;
}

console.log(solution(s));