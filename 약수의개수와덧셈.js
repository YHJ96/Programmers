// 푸는중

const left = 13;
const right = 17;

function solution(left, right) {
    const degree = right - left;
    const degreeArr = [];
    const count = [];
    for(let i = 0; i <= degree; i++) {
        degreeArr.push(left + i);
    }
    for(let j = 0; j < degreeArr.length; j++) {
        let num = 0;
        for(let k = 1; k <= degreeArr[j]; k++ ) {
            if(degreeArr[j] % j === 0) {
                num++;
            }
            count.push(num);
            num *= 0;
        }
    }
    return count;
}

console.log(solution(left, right));