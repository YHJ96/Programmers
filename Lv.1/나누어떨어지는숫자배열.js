const arr = [5,9,7,10];
const divisor = 5;

function solution(arr, divisor) {
    // 나머지값이 0 인수 배열에서 찾기
    let answer = arr.filter((item) => item % divisor === 0);
    answer = answer.sort((a,b) => a - b);
    if(answer.length === 0 ) return [-1];
    return answer;
}

console.log(solution(arr, divisor));