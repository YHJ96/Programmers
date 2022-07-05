const n = 3;

function solution(n) {
    const answer = [];
    function hanoi(a, b, n) {
        // 원판이 1이 남으면 어디든지 옮길 수 있으므로 정지
        if(n == 1) return answer.push([a,b]);
        // 1,2,3 기둥의 합은 6 1번째 원판을 2번째로 옮기기 위해 6-a-b 원판 -1
        hanoi(a, 6-a-b, n-1);
        // 1번째 원판을 3으로 옮김
        answer.push([a,b]);
        // 2번쨰 원판을 3으로 옮김
        hanoi(6-a-b, b, n-1);
    }
    // 하노이의 탑 실행
    hanoi(1, 3, n);
    return answer;
}

console.log(solution(n))