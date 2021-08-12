const s = "AB c";
const n = 1;

function solution(s, n) {
    const compare = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
    const newStr = [...s];
    const answer = [];
    for(let i = 0; i < s.length; i++) {
        if(newStr[i] === ' ') {
            answer.push(' ');
        } else if (newStr[i] === newStr[i].toLowerCase()) {
            const index = compare.indexOf(newStr[i]);
            answer.push(compare[index + n]);
        } else {
            const index = compare.indexOf(newStr[i].toLowerCase());
            answer.push(compare[index + n].toUpperCase());
        }
    }
    return answer;
}

console.log((solution(s, n)));