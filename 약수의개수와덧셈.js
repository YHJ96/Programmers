// 푸는중

const left = 13;
const right = 17;

function solution(left, right) {
    const degree = right - left;
    let degreeArr = [];
    const divisorNum = [];
    let divisorBool = [];
    for(let i = 0; i <= degree; i++) {
        degreeArr.push(left + i);
    }
    for(let j = 0; j < degreeArr.length; j++) {
        let num = 0;
        for(let k = 1; k <= degreeArr[j]; k++) {
            if(degreeArr[j] % k === 0) {
                num += 1;
            }
        }
        divisorNum.push(num);
    }
    divisorBool = divisorNum.map((item) => {
        if(item % 2 === 0) return true;
        else return false;
    })
    degreeArr = degreeArr.map((item, index) => {
        if(divisorBool[index] === true) return item;
        if(divisorBool[index] === false) return -item;
    })
    const answer = degreeArr.reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution(left, right));