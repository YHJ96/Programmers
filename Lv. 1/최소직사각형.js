const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];

function solution(sizes) {
    let answer = 0;
    const xAxis = [];
    const yAxis = [];
    for(let item of sizes) {
        // a와 b의 길이를 구조분해할당으로 나눈다.
        const [a, b] = item;
        // 조건문 a와 b중 큰 값은 xAxis로 작은 값은 yAxis로 나눠서 길이의 최대값을 구한다.
        if(a > b) {
            xAxis.push(a);
            yAxis.push(b);
        }
        else if(a < b) {
            xAxis.push(b);
            yAxis.push(a);
        }
        else if(a === b) {
            xAxis.push(a);
            yAxis.push(b);
        }
    }
    // 내림차순 정렬
    xAxis.sort((a,b) => b-a);
    yAxis.sort((a,b) => b-a);
    // 카드 지갑의 최대 길이 구하기
    answer = xAxis[0] * yAxis[0];
    return answer;
}

console.log(solution(sizes));