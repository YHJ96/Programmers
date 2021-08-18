// 푸는중

/*
n = 학생수
lost = 도난당한 학생수
reserve = 여유 옷 가져온 학생수 (앞뒤학생들만 가능)
*/

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 4, 5];

function solution(n, lost, reserve) {
    let newReserve = reserve.filter((item) => lost.map((item1) => item !== item1));
    return newReserve;
}

console.log(solution(n, lost, reserve));