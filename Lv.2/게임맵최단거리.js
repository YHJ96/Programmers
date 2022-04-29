const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];

function solution(maps) {
    let answer;
    const n = maps.length;
    const m = maps[0].length;
    // 4방 탐색을 위한 dy, dx 초기화
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    // queue의 초기값
    const queue = [[0,0,0]];
    // queue가 빌때 까지 진행
    while(queue.length) {
        // 구조분해 할당으로 작업 실행
        const [y, x, path] = queue.shift();
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외처리
            if(ny >= 0 && nx >= 0 && ny < n && nx < m && maps[ny][nx] === 1) {
                // path + 2를 하는 이유는 queue에 값을 0으로 하였고 또한 스타트지점 +1를 해줘야 하기 때문이다.
                maps[ny][nx] = path + 2;
                // 다음 queue를 실행
                queue.push([ny, nx, path + 1]);
            }
        }
    }
    // 마지막 좌표의 값을 셋팅
    answer = maps[n-1][m-1];
    // 가는 방법이 존재 하지 않을 때 예외처리
    if(answer === 0) return -1;
    return answer;
}

console.log(solution(maps));