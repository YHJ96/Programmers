const s = 'abcdde';

function solution(s) {
    let newStr = [...s];
    let answer = 0;
    if(newStr.length % 2 !== 0) {
        answer += Math.ceil(newStr.length / 2) - 1;
        return newStr[answer];
    } else {
        answer += newStr.length / 2;
        return newStr[answer - 1] + newStr[answer];
    }
}

console.log(solution(s));