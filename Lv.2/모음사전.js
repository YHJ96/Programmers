const word = 'A';

// 깊이 우선 탐색을 사용하여 백트래킹 구현
function dfs(l, n, tmp, arr) {
    // 모음단어
    const words = ['A', 'E', 'I', 'O', 'U'];
    // 재귀의 레벨이 n과 같으면 정지
    if (l === n) {
        arr.push(tmp.slice().join(''));
        // 아닐경우 백트래킹 시작 재귀 호출
    } else {
        for (let i = 0; i < words.length; i++) {
            tmp[l] = words[i];
            dfs(l + 1, n, tmp, arr);
        }
    }
}

function solution(word) {
    let answer = [];
    for (let i = 1; i <= 5; i++) {
        // 초기화 tmp 변수
        const tmp = Array.from({ length: i }, () => 0);
        dfs(0, i, tmp, answer);
    }
    // 사전 순으로 오름차순 정렬
    answer.sort((a, b) => a.localeCompare(b));
    // 정답 정제 (인덱스는 0 부터 시작이므로 + 1)
    return answer.indexOf(word) + 1;
}

console.log(solution(word));