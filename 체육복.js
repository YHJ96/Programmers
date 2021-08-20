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
    // 잃어버렸을 경우 자기 자신이 여벌의 옷을 가지고 있는경우 중복제거
    let minus = [];
    // 실제로 여벌의 옷을 빌릴수도 없고 잃어버린 수
    for(let i = 0; i < newLost.length; i++) {
        for(let j = 0; j < newReserve.length; j++) {
            if(newLost[i] - newReserve[j] === -1 || newLost[i] - newReserve[j] === 1) {
                minus.push(newLost[i]);
                delete newLost[i];
                delete newReserve[j];
                // 조건에 맞으면 함수에서 인자삭제
            }
        }
    }
    newLost = newLost.filter((item) => !minus.includes(item));
    // filter를 통해서 잃어버린사람 수를 찾기
    const answer = n - newLost.length;
    return answer;
}

console.log(solution(n, lost, reserve));
