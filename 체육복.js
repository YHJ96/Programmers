// 푸는중
// 테스트케이스 2,4번 오류
/*
n = 학생수
lost = 도난당한 학생수
reserve = 여유 옷 가져온 학생수 (앞뒤학생들만 가능)
*/

const n = 5;
const lost = [2, 4];
const reserve = [3];

function solution(n, lost, reserve) {
    let newLost = lost.filter((item) => !reserve.includes(item)).sort((a,b) => a-b);
    let newReserve = reserve.filter((item) => !lost.includes(item)).sort((a,b) => a-b);
    let minus = [];
    for(let i = 0; i < newLost.length; i++) {
        for(let j = 0; j < newReserve.length; j++) {
            if(newLost[i] - newReserve[j] === -1 || newLost[i] - newReserve[j] === 1) {
                minus.push(newLost[i]);
                delete newLost[i];
                delete newReserve[i];
                // newLost.splice(i, 1);
                // newReserve.splice(j, 1);
            }
        }
    }
    console.log('newLost :', newLost, 'newReserve :', newReserve)
    newLost = newLost.filter((item) => !minus.includes(item));
    const answer = n - newLost.length;
    return answer;
}

console.log(solution(n, lost, reserve));
