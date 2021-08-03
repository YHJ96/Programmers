const arr = [10,5,6,4,2];
const lengthArr = [10];

function solution(arr) {
    if(arr.length === 1) return [-1];
    let newArr = arr.slice(0, arr.length).sort((a,b) => a-b);
    newArr = newArr[0];
    const answer = arr.filter((item)=> item !== newArr);
    return answer;
}

console.log(solution(arr));