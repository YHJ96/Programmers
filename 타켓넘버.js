function solution(numbers, target) {
    let answer = 0;
    let n = numbers.length;
    // DFS시작 numbers[0] ~ numbers[length - 1] 까지 탐색
    function dfs(l, sum) {
        // l이 n까지의 노드 탐색완료하면 탐색종료
        if(l === n) {
            // target과 sum이 같으면 answer + 1
            if(sum === target) answer += 1;
        } else {
            // +1하는 경우
            dfs(l+1, sum + numbers[l]);
            // -1하는 경우
            dfs(l+1, sum - numbers[l]);
        }
    }
    // l이 numbers[0] 부터 sum이 0 부터 시작
    dfs(0, 0);
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));