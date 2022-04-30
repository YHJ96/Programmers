const n = 6;
const edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];

function solution(n, edge) {
    let answer = 0;
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);
    const nodeLength = Array.from({ length: n + 1 }, () => 0);
    const queue = [];
    // edge의 요소 만큼 순회
    for(let i = 0; i < edge.length; i++) {
        // 간선의 정보를 graph에 입력 양방향 그래프
        const [ node1, node2 ] = edge[i];
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 노드 방문 순서를 위한 오름차순 정렬
    graph.forEach((node) => node.sort((a,b) => a-b));
    // queue 초기화
    queue.push(1);
    // 방문처리 초기화
    visited[1] = true;
    // 넓이 우선 탐색 시작
    while(queue.length) {
        // idx에 queue의 앞에 요소로 초기화
        const idx = queue.shift();
        // 노드별 간선정보의 요소만큼 순회
        for(let node of graph[idx]) {
            // 방문을 하지 않은 경우
            if(!visited[node]) {
                // queue에 node push
                queue.push(node);
                // 방문처리
                visited[node] = true;
                // 해당 노드의 간선의 개수 입력
                nodeLength[node] += nodeLength[idx] + 1;
            }
        }
    }
    // 최대의 간선의 개수 추출
    const maxLength = Math.max(...nodeLength);
    // 최대의 간선의 노드가 몇개인지 확인
    for(let target of nodeLength) if(maxLength === target) answer += 1;
    return answer;
}

console.log(solution(n, edge));