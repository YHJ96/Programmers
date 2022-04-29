const n = 3;
const computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

function solution(n, computers) {
    let answer = 0;
    // 노드의 간선의 정보에 따라 입력할 그래프 초기화
    const graph = Array.from({ length : n + 1 }, () => []);
    // 노드의 방문처리를 위한 변수 초기화
    const visited = Array.from({ length: n + 1 }, () => false);
    // 노드의 간선 정보를 입력 (단일 간선 그래프)
    for(let i = 0; i < computers.length; i++) {
        for(let j = 0; j < computers[i].length; j++) {
            const checked = computers[i][j];
            if(checked) graph[i+1].push(j+1);
        }
    }
    // 깊이 우선 탐색 함수 생성
    function DFS(L) {
        // 해당 노드 방문 처리
        visited[L] = true;
        // 해당 노드의 간선 정보 요소만큼 반복문 실행
        for(let node of graph[L]) {
            // 해당 노드를 방문하지 않았으면 깊이 우선 탐색으로 방문 시작
            if(!visited[node]) DFS(node);
        }
    }
    // 모든 노드의 요소만큼 순회
    for(let i = 1; i < graph.length; i++) {
        // 방문을 하지 않은 노드가 있으면 실행
        if(!visited[i]) {
            // 방문을 하지 않은 노드를 answer에 + 1
            answer += 1;
            // 깊이 우선 탐색 실행
            DFS(i);
        }
    }
    return answer;
}

console.log(solution(n, computers));