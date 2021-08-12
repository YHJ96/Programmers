const s = "ab Z";
const n = 100;

function solution(s, n) {
    const compare = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
    const newStr = [...s];
    let answer = [];
    for(let i = 0; i < s.length; i++) {
        if(newStr[i] === ' ') {
            answer.push(' ');
        } else if (newStr[i] === newStr[i].toLowerCase()) {
            let index = compare.indexOf(newStr[i]) + n;
            while(index > 25) {
                index = index - 26;
            }
            answer.push(compare[index]);
        } else {
            let index = compare.indexOf(newStr[i].toLowerCase()) + n;
            while(index > 25) {
                index = index - 26;
            }
            answer.push(compare[index].toUpperCase());
        }
    }
    answer = answer.reduce((acc, curr) => acc + curr);
    return answer;
}

console.log((solution(s, n)));