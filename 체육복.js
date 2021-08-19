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
    let newLost = lost.filter((item) => !reserve.includes(item));
    let newReserve = reserve.filter((item) => !lost.includes(item));
    let minus = [];
    for(let i = 0; i < newLost.length; i++) {
        for(let j = 0; j < newReserve.length; j++) {
            if(newLost[i] - newReserve[j] === -1 || newLost[i] - newReserve[j] === 1) {
                minus.push(newLost[i]);
                newLost.splice(newLost[i], 1);
                newReserve.splice(newReserve[j], 1);
            }
        }
    }
    let answer = n - minus.length;
    return answer;
}

console.log(solution(n, lost, reserve));