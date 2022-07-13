const n = 4;

function solution(n) {
    // 1 * 2, 2 * 2의 타일링 개수는 1과 2이다.
    const arr = [0,1,2];
    /* 
    3 번째 타일링을 진행하면 만드는 경우의 수는 (2 * 2 + 2 * 1)의 조합 방법과 (2 * 1 + 2 * 2)의 방법이 추가된다. 
    점화식은 arr[n] = arr[n - 2] + arr[n - 1]이 된다.
    */
    for(let i = 3; i <= n; i++) arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
    // 정답 정제
    return arr[n];
}

console.log(solution(n));