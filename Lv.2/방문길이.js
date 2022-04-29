function solution(s) {
    let answer = [];
    // 좌표 시작점
    let y = 0;
    let x = 0;
    // 상 우 하 좌 방향
    let dy = [-1, 0 ,1, 0];
    let dx = [0, 1, 0, -1];
    let step = ['U','R','D','L'];
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < step.length; j++) {
            // 스탭이랑 비교해서 위치찾기
            if(s[i] === step[j]) {
                // 스탭 비교한 좌표평면
                const ny = y + dy[j];
                const nx = x + dx[j];
                // 좌표평면을 벗어나면 실행X
                if(nx < -5 || ny < -5 || nx > 5 || ny > 5) continue;
                const preY = y;
                const preX = x;
                y = ny;
                x = nx;
                // 좌표의 위치를 전부 answer에 넣기
                answer.push(`${preY}${preX}${y}${x}`);
                answer.push(`${y}${x}${preY}${preX}`);
            }
        }
    }
    // 중복 체크하고 이전좌표와 다음좌표를 넣었기 때문에 나누기 2 진행
    const mySet = new Set([...answer]);
    return mySet.size / 2;
}

console.log(solution("ULURRDLLU"));