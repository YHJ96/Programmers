const s = "one4seveneightone";

function solution(s) {
    let answer = s;
    answer = answer.replace(/zero/gi, '0');
    answer = answer.replace(/one/gi, '1');
    answer = answer.replace(/two/gi, '2');
    answer = answer.replace(/three/gi, '3');
    answer = answer.replace(/four/gi, '4');
    answer = answer.replace(/five/gi, '5');
    answer = answer.replace(/six/gi, '6');
    answer = answer.replace(/seven/gi, '7');
    answer = answer.replace(/eight/gi, '8');
    answer = answer.replace(/nine/gi, '9');
    answer = parseInt(answer);
    return answer;
}

console.log(solution(s));