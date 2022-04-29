const k = 80;
const dungeons = [[80,20],[50,40],[30,10]];

function solution(k, dungeons) {
    let answer = 0;
    // 순열을 저장할 변수 초기화
    const order = [];
    // 던전의 정보의 길이 초기화
    const n = dungeons.length;
    // 던전의 순서를 저장
    const tmp = Array.from({ length: n }, () => 0);
    // 던전의 입장을 체크함
    const ck = Array.from({ length: n }, () => 0);
    // dfs 깊이 우선탐색 시작 
    function DFS(L) {
        // L이 n이면 던전을 출력하고 정지
        if(L === n) {
            order.push(tmp.slice());
        } else {
            // 백트래킹 시작
            for(let i = 0; i < n; i++) {
                // 방문 체크
                if(ck[i] === 0) {
                    // 방문처리
                    ck[i] = 1;
                    // tmp 배열에 던전 정보 넣기
                    tmp[L] = dungeons[i];
                    // 아래 단계로 내려감
                    DFS(L+1);
                    // 올라오면서 방문 처리 해제
                    ck[i] = 0;
                }
            }
        }
    }
    DFS(0);
    // 던전 입장 순서의 요소만큼 순회
    order.forEach((dungeon) => {
        // 피로도 초기화
        let total = k;
        // 던전 입장횟수 
        let count = 0;
        // 던전의 입장 순서의 요소들을 순회
        for(let item of dungeon) {
            // 입장최소 변수와 피로도를 구조분해할당
            const [enter, minus] = item;
            // 던전에 입장할 수 있으면 피로도를 빼주고 count + 1
            if(total >= enter) {
                total -= minus;
                count += 1;
            // 입장이 불가능하면 break
            } else break;
        }
        // answer이 최대값인지 확인
        answer = Math.max(answer, count);
    });
    return answer;
}

console.log(solution(k, dungeons));