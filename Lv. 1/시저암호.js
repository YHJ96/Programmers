const s = "ab Z";
const n = 100;

function solution(s, n) {
    const compare = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
    const newStr = [...s];
    // 문자열을 각각의 문자로 배열에 넣기
    let answer = [];
    for(let i = 0; i < s.length; i++) {
        if(newStr[i] === ' ') {
            answer.push(' ');
            // 공백 예외처리
        } else if (newStr[i] === newStr[i].toLowerCase()) {
            let index = compare.indexOf(newStr[i]) + n;
            while(index > 25) {
                index = index - 26;
            }
            // z -> a 가는 예외처리
            answer.push(compare[index]);
        } else {
            let index = compare.indexOf(newStr[i].toLowerCase()) + n;
            while(index > 25) {
                index = index - 26;
            }
            answer.push(compare[index].toUpperCase());
            // 대문자로 변환
        }
    }
    answer = answer.reduce((acc, curr) => acc + curr);
    // 반환문자열로 하기위해 인자 더해줌
    return answer;
}

console.log((solution(s, n)));