const s = "3people unFollowed me";

console.log(solution(s));

// 테스트 8 런타임 에러
function solution(s) {
    let answer = [...s.toLowerCase()];
    for(let i = 0; i < answer.length; i++) {
        answer[0] = answer[0].toUpperCase();
        if(answer[i] === ' ' && answer[i + 1] !== ' ') {
            answer[i + 1] = answer[i + 1].toUpperCase();
        } 
    }
    return answer.join('');
}