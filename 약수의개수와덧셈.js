// 푸는중

const left = 13;
const right = 17;

function solution(left, right) {
    const degree = right - left;
    const degreeArr = [];
    for(let i = 0; i <= degree; i++) {
        degreeArr.push(left + i);
    }
    return degreeArr;
}

console.log(solution(left, right));