const left = 13;
const right = 17;

function solution(left, right) {
    const degree = right - left;
    // 수의 범위를 정함
    let degreeArr = [];
    // 수의 범위의 숫자를 넣을 빈 배열 선언
    const divisorNum = [];
    let divisorBool = [];
    // 수의 약수에 따라서 bool값을 입력한 빈 배열 선언
    for(let i = 0; i <= degree; i++) {
        degreeArr.push(left + i);
    }
    // 수의 범위의 숫자를 degreeArr에 넣음
    for(let j = 0; j < degreeArr.length; j++) {
        let num = 0;
        for(let k = 1; k <= degreeArr[j]; k++) {
            if(degreeArr[j] % k === 0) {
                num += 1;
            }
        }
        divisorNum.push(num);
    }
    // 나머지가 없는 수 약수들의 개수를 체크
    divisorBool = divisorNum.map((item) => {
        if(item % 2 === 0) return true;
        else return false;
    })
    // bool값으로 바꿔서 새로운 배열 반환
    degreeArr = degreeArr.map((item, index) => {
        if(divisorBool[index] === true) return item;
        if(divisorBool[index] === false) return -item;
    })
    // 약수가 짝수이면 ture 아니면 false 반환
    const answer = degreeArr.reduce((acc, curr) => acc + curr);
    // 모든수의 합
    return answer;
}

console.log(solution(left, right));