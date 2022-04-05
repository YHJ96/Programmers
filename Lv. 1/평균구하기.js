const arr = [1,2,3,4,5,6,7,8]

function solution(arr) {
    let answer = arr.reduce((acc, curr)=> acc + curr);
    answer = answer / arr.length;
    return answer;
}

console.log(solution(arr));