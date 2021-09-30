const s = "3people  unFollowed me";

console.log(solution(s));

function solution(s) {
    // 문자열을 모두 소문자로 바꾸고 공백에 따라 나눈다.
    let answer = s.toLowerCase().split(' ');
    for(let i = 0; i < answer.length; i++) {
        // 공백에 따라 나눈 문자열을 하나씩 쪼갠다.
        let item = answer[i].split('');
        // 공백으로 이루어진 값은 빈 문자열이므로 item[0]이 undefinde이다.
        if(item[0] !== undefined) {
            item[0] = item[0].toUpperCase();
        }
        answer[i] = item.join('');
    }
    return answer.join(' ');
}