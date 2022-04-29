const s = "(){}[]";

function solution(s) {
    // 올바른 괄호의 최대 개수를 저장할 배열 초기화
    const answer = [];
    // 괄호를 회전시킨 모든 문자열을 담을 배열 초기화
    const ret = [];
    // 괄호를 회전시킬 문자열을 저장하는 공간 초기화
    let str = s;
    // s의 길이 + 1 만큼 반복수행
    for(let i = 0; i < s.length + 1; i++) {
        ret.push(str);
        // 문자열의 요소를 나눠서 배열로 치환
        const arr = [...str];
        // 제일 앞에 있는 요소를 item에 저장
        const item = arr.shift();
        // 맨 뒤로 item의 값을 push
        arr.push(item);
        // 배열의 요소를 문자열로 치환
        str = arr.join('');
    }
    // 괄호의 요소만큼 수행 시작
    for(let item of ret) {
        let count = 0;
        // 문자열 stack 초기화
        const stack = [];
        for(let i = 0; i < item.length; i++) {
            // 닫는 각각의 괄호를 만났을 경우 stack의 마지막 인덱스의 값이 여는 괄호일 경우 stack에서 제거
            if(item[i] === ']' && stack[stack.length - 1] === '[') stack.pop();
            else if(item[i] === '}' && stack[stack.length - 1] === '{') stack.pop();
            else if(item[i] === ')' && stack[stack.length - 1] === '(') stack.pop();
            // 여는 괄호를 만날경우 push
            else stack.push(item[i]);
            // stack이 비워질 경우에만 count += 1
            if(stack.length === 0) count += 1;
        }
        // 올바른 괄호가 아닐경우 count를 0으로 교체헤서 예외처리
        if(stack.length !== 0) count = 0;
        answer.push(count);
    }
    // 정답 정제
    return Math.max(...answer);
}

console.log(solution(s));