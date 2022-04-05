function solution(n) {
    let answer = 1;
    // 나머지가 1이 되는 최소값 찾기
    while(n % answer !== 1) {
        answer++;
    }
    return answer;
}

console.log(solution(10));