const seoul = ["Jane", "Kim"];

function solution(seoul) {
    let answer = seoul;
    answer = answer.indexOf('Kim');
    return `김서방은 ${answer}에 있다`
}

console.log(solution(seoul));