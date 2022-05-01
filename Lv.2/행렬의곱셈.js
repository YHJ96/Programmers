const arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
const arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]]

function solution(arr1, arr2) {
    const answer = [];
    // arr1의 요소만큼 순회시작
    for(let i = 0; i < arr1.length; i++) {
        const row = [];
        // 각 좌표를 찍기 위한 완전탐색 시작 행렬의 곱이므로 y축 기준으로 돌아감
        for(let j = 0; j < arr2[0].length; j++) {
            // 최종 좌표가 될 숫자의 합
            let sum = 0;
            for(let k = 0; k < arr2.length; k++) {
                // 각 숫자를 넣어줌 arr[i][k]와 arr2[k][j]는 좌표 횡이 반대 좌표설정임
                sum += arr1[i][k] * arr2[k][j];
            }
            // 각 좌표를 넣어줌
            row.push(sum);
        }
        // 정답 정제
        answer.push(row);
    }
    return answer;
}

console.log(solution(arr1, arr2));