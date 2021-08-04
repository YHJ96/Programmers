const arr = [1,1,3,3,0,1,1];

function solution(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i+1] && i+1 !== arr.length) {
            answer.push(arr[i]);
        }
    }
    answer.push(arr[arr.length - 1]);
    return answer;
}

console.log(solution(arr));