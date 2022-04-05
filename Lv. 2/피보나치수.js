const n = 100000; 

function solution(n) {
    let answer = fibonacci(n) % 1234567;
    // call Stack Maximum 방지
    return answer;
}

// 재귀호출의 길이를 초과 안에서 반복문 사용 배열 이용해야 call Stack Maximum 방지
function fibonacci (n) {
    let num = [];
    num[0] = 0;
    num[1] = 1;
    for(let i = 2; i <= n; i++) {
        // call Stack Maximum 방지
        num[i] = num[i - 1] % 1234567 + num[i - 2] % 1234567;
    }
    return num[n];
}

console.log(solution(n));

/*
function solution(n) {
    let answer = fibonacci(n) % 1234567;
    return answer;
}

function fibonacci (n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n - 1) % 1234567 + fibonacci(n - 2) % 1234567;
}
*/

/*
1. 처음에 생각한 피보나치수열의 재귀함수
2. 검색하고 알아본점 보통 JS 호출 가능한 재귀 스택은 10000 정도
3. 성능이 반복문에 비해 느리므로 성능을 위해 반복문으로 반복하기.
*/