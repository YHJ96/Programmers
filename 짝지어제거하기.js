const s = 'baabaa';

function solution(s) {
    let answer = 1;
    // stack으로 해결
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        // stack에 인자가 없으면 넣고 stack의 마지막 원소와 s[i]가 같으면 빼기
        if(stack.length === 0 || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
        // s[i]인자와 스택 마지막인자가 같다면 pop
        else stack.pop();
    }
    if(stack.length !== 0) answer = 0;
    return answer;
}

console.log(solution(s));