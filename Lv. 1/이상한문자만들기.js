const s = 'try hello worldsibak';

function solution(s) {
    const Str = s.split(" ");
    let newStr = [];
    let answer = [];
    for(let i = 0; i < Str.length; i++) {
        for(let j = 0; j < Str[i].length; j++) {
            if(j === 0 || j % 2 === 0) {
               newStr.push(Str[i][j].toUpperCase())
            } else newStr.push(Str[i][j].toLowerCase());
        }
        answer.push(newStr.join(''));
        newStr = [];
    }
    answer = answer.join(" ");
    return answer;
}

console.log(solution(s));